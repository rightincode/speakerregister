using System.Collections.Generic;
using sregister_webapi.Models;

namespace sregister_webapi.Interfaces
{
    public interface ISpeakerRepository
    {
        IEnumerable<Speaker> GetSpeakers();

        Speaker LoadSpeaker(int id);

        Speaker SaveSpeaker(Speaker currentSpeaker);

        bool DeleteSpeaker(int id);
    }
}
