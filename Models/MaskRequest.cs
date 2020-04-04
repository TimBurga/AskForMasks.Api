namespace AskForMasksCoreVue.Models
{
    using System;

    public class MaskRequest
    {
        public string       Id             { get; set; }
        public Organization Organization   { get; set; }
        public Submitter    Submitter      { get; set; }
        public DateTime     RequestDate    { get; set; }
    }
}
