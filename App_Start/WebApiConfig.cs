using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Net.Http.Headers;
using System.Web.Http;

namespace IntranetAPI
{
    public static class WebApiConfig
    {
        //Custom MediaTypeFormatter to override the defalut format
        public class CustomJsonFormatter : JsonMediaTypeFormatter
        {
            public CustomJsonFormatter()
            {
                this.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            }
            public override void SetDefaultContentHeaders(Type type, HttpContentHeaders headers, MediaTypeHeaderValue mediaType)
            {
                base.SetDefaultContentHeaders(type, headers, mediaType);
                headers.ContentType = new MediaTypeHeaderValue("application/json");
            }
        }
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Override the default MediaTypeFormatter
            config.Formatters.Add(new CustomJsonFormatter());
            //remove XML format to use only Json
            //      config.Formatters.Remove(config.Formatters.XmlFormatter);
            // Indent Json Data

            config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;

            // Change Pascal to Camel case
            //  config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            // disable Looping
            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            //Enable Cors 
            config.EnableCors();

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
