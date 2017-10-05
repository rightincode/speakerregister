using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using sregister_core.Interfaces;
using sregister_core.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace sregister_webapi.Controllers
{
    [Route("api/conferences")]
    public class ConferencesController : Controller
    {
        private readonly IConferenceRepository _conferenceRepository;

        public ConferencesController(IConferenceRepository conferenceRepository)
        {
            _conferenceRepository = conferenceRepository;
        }
        
        [HttpGet]
        public IEnumerable<Conference> Get()
        {
            return _conferenceRepository.GetConferences();
        }

        [HttpGet("{id}")]
        public Conference Get(int id)
        {
            return _conferenceRepository.LoadConference(id);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Conference conference)
        {
            if (conference == null)
            {
                return BadRequest();
            }

            var savedConference = _conferenceRepository.SaveConference(conference);

            if (savedConference.Id > 0)
            {
                return new OkObjectResult(savedConference);
            }
            else
            {
                var actionResult = new ObjectResult(savedConference)
                {
                    StatusCode = 500
                };

                return actionResult;
            }
        }

        [HttpPut("{id}")]
        public Conference Put(int id, [FromBody]Conference conference)
        {
           conference.Id = id;
           return _conferenceRepository.SaveConference(conference);
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            return _conferenceRepository.DeleteConference(id);
        }
    }
}
