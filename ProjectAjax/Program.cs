using Microsoft.AspNetCore.Http;
using JavaScriptEngineSwitcher.V8;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using React.AspNet;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
services.AddReact();

// Make sure a JS engine is registered, or you will get an error!
services.AddJsEngineSwitcher(options => options.DefaultEngineName = V8JsEngine.EngineName)
  .AddV8();

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Initialise ReactJS.NET. Must be before static files.
app.UseReact(config =>
{
    // If you want to use server-side rendering of React components,
    // add all the necessary JavaScript files here. This includes
    // your components as well as all of their dependencies.
    // See http://reactjs.net/ for more information. Example:
    //config
    //  .AddScript("~/js/First.jsx")
    //  .AddScript("~/js/Second.jsx");

    // If you use an external build too (for example, Babel, Webpack,
    // Browserify or Gulp), you can improve performance by disabling
    // ReactJS.NET's version of Babel and loading the pre-transpiled
    // scripts. Example:
    //config
    //  .SetLoadBabel(false)
    //  .AddScriptWithoutTransform("~/js/bundle.server.js");
});

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Ajax}/{action=Index}/{id?}");

app.Run();
