using System.Collections.Generic;
using sregister_webapi.Models;

namespace sregister_webapi.Repositorities
{
    public interface ISpeakerRepository
    {
        List<Speaker> GetSpeakers();

        Speaker LoadSpeaker(int id);

        Speaker SaveSpeaker(Speaker currentSpeaker);

        bool DeleteSpeaker(int id);
    }
}
