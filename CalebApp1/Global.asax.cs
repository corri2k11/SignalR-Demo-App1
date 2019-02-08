using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace CalebApp1
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //Old way of doing SignalR setup
            //  RouteTable.Routes.MapHubs();  //or
            //  RouteTable.Routes.MapConnection<MyPersistentCon>("taskpersist", "/taskpersist");
            //Deprecated/Obsolete. Now use IAppBuilder.MapSignalR<type> in an OWIN startup class
        }
    }
}
