using Microsoft.AspNetCore.Mvc;
using ProjectAjax.Models;
using System.Text.Json;

namespace ProjectAjax.Controllers
{
    public class AjaxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public string AjaxPost([FromBody] AjaxModel model) 
        {
            string json = JsonSerializer.Serialize(model);

            return json;
        }
    }
}
