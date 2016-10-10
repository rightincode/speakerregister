using System.Collections.Generic;
using sregister_webapi.Models;

namespace sregister_webapi.Repositorities
{
    public class SpeakerRepository
    {
        public List<Speaker> GetSpeakers()
        {
            var speakerList = new List<Speaker>();
            speakerList.Add(new Speaker
            {
                Address1 = "1234 Main St.",
                Address2 = "",
                City = "Huntersville",
                EmailAddress = "rtaylor@rightincode.com",
                FirstName = "Richard",
                Id = 1,
                LastName = "Taylor",
                PhoneNumber = "555-555-1212",
                State = "NC",
                Zipcode = "28078-7100"
            });

            speakerList.Add(new Speaker
            {
                Address1 = "5678 First St.",
                Address2 = "",
                City = "Charlotte",
                EmailAddress = "staylor@rightincode.com",
                FirstName = "Shondrecca",
                Id = 2,
                LastName = "Taylor",
                PhoneNumber = "555-555-3434",
                State = "NC",
                Zipcode = "28031-1100"
            });

            return speakerList;
        }
    }
}
