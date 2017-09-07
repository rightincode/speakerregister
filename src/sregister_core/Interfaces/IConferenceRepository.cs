using System.Collections.Generic;
using sregister_core.Models;

namespace sregister_core.Interfaces
{
    public interface IConferenceRepository
    {
        IEnumerable<Conference> GetConferences();

        Conference LoadConference(int id);

        Conference SaveConference(Conference currentConference);

        bool DeleteConference(int id);
    }
}
