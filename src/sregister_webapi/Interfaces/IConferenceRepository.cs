using System.Collections.Generic;
using sregister_webapi.Models;

namespace sregister_webapi.Interfaces
{
    public interface IConferenceRepository
    {
        IEnumerable<Conference> GetConferences();

        Conference LoadConference(int id);

        Conference SaveConference(Conference currentConference);

        bool DeleteConference(int id);
    }
}
