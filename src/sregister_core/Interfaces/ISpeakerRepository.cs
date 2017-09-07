using System.Collections.Generic;
using sregister_core.Models;

namespace sregister_core.Interfaces
{
    public interface ISpeakerRepository
    {
        IEnumerable<Speaker> GetSpeakers();

        Speaker LoadSpeaker(int id);

        Speaker SaveSpeaker(Speaker currentSpeaker);

        bool DeleteSpeaker(int id);
    }
}
