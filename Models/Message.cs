namespace AskForMasksCoreVue.Models
{
    using System;

    public class Message
    {
        public string   Id            { get; set; }
        public string   Name          { get; set; }
        public string   Email         { get; set; }
        public string   Text          { get; set; }
        public DateTime SubmittedDate { get; set; }
    }
}
