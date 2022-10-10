import { Component, OnInit } from '@angular/core';
import { ItemsCategoryModel } from 'app/shared/models/ItemsCategoryModel';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ItemcategoryService } from './service/itemcategory.service';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-itemscategory',
  templateUrl: './itemscategory.component.html',
  styleUrls: ['./itemscategory.component.css']
})
export class ItemscategoryComponent implements OnInit {


 

  public loading = false;
  notificationMessage = '';

  ItemsCategoryForm: FormGroup;

  public ItemsCategorys: ItemsCategoryModel[] = [];

    constructor(
        private icSrv: ItemcategoryService,
        private fb: FormBuilder,
        private alertService: AlertService
      ) {
        this.ItemsCategoryForm = this.fb.group({
          icId: null,
          icName: [null, Validators.required]
        });
  
  
    }
    ngOnInit() {
      this.onGetAllItemsCategorys();
    }
    
    onGetAllItemsCategorys() {
            this.loading = true;
            this.icSrv.getAllItemsCategorys().subscribe((brns: ItemsCategoryModel[]) => {  
                    this.ItemsCategorys = brns;
                    this.loading = false;
              }, error => {
                    this.loading = false;
                    if(error.message.includes('Http failure response for http://')) {
                      this.alertService.danger( 'server error');
                    }
            });
    }
    onSubmit(): void {
        if (!this.ItemsCategoryForm.value.icId) {
          this.loading = true;
                this.icSrv.addItemsCategory(this.ItemsCategoryForm.value).subscribe(ItemsCategoryAdded => {
                      this.ItemsCategoryForm.reset();
                      this.loading = false;
                      this.alertService.success( 'Added successfully ');
                      this.onGetAllItemsCategorys(); 
                }, error => {
                  this.loading = false;
                  if(error.message.includes('Http failure response for http://')) {
                    this.alertService.danger( 'server error ');
                  }
                });
        } else if (this.ItemsCategoryForm.value.icId) {          
                this.icSrv.editItemsCategory(this.ItemsCategoryForm.value.icId, this.ItemsCategoryForm.value).subscribe(ItemsCategoryAdded => {
                      this.ItemsCategoryForm.reset();
                      this.ItemsCategoryForm.controls['icId'].setValue(0);
                      this.onGetAllItemsCategorys();
                      this.alertService.success( 'Changed successfully ');
                }, error => {
                      this.loading = false;
                      if(error.message.includes('Http failure response for http://')) {
                        this.alertService.danger( 'Server error ');
                      }
                }); 
        }
    }
    onEditItemsCategory(ic) {
        this.ItemsCategoryForm.reset();
        this.ItemsCategoryForm.patchValue(ic);
    }
    onDeleteItemsCategory(ic : ItemsCategoryModel) {
        if(confirm("Are you sure to delete ItemsCategory " + ic.icName)){
          this.icSrv.deleteItemsCategory(ic.icId).subscribe((icdlt: ItemsCategoryModel) => {
            this.alertService.success( 'Deleted successfully ');
            this.onGetAllItemsCategorys();
          }, error => {
            this.loading = false;
            if(error.message.includes('Http failure response for http://')) {
              this.alertService.danger( 'server error ');
            }
          });
        }
    }
    onCancel() {
       this.ItemsCategoryForm.reset();
 
    }
    
    get getItemsCategoryForm() { return this.ItemsCategoryForm.controls; }



}
