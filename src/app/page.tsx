import Image from "next/image";
import Card from "./components/card";
import Apostrophe from "./assets/apostrophe.svg";
import AvatarA from "./assets/Oval.svg";
import AvatarB from "./assets/avatarb.svg";
import AvatarC from "./assets/avatarc.svg";
import AvatarD from "./assets/avatard.svg";
import AvatarE from "./assets/avatare.svg";

export default function Home() {
  return (
    <main className="grid m-auto grid-cols-1 xl:grid-cols-4 xl:grid-rows-2 gap-x-[30px] gap-y-6 px-6 py-[71px] xl:px-[165px] xl:py-[164px]">
      <div className="col-span-1 row-span-1 rounded-lg  xl:col-start-1 xl:col-end-3 bg-[#733FC8]">
        <div className="px-8 pb-8 pt-[26px] relative  z-20">
          <Card
            name="Daniel Clifford"
            title="Verified Graduate"
            content="I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth."
            subcontent="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing 
            experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the  best - and most grueling - 
            time of my life. Since completing the course, I’ve  successfully switched careers, working as a Software Engineer at a VR startup. ”"
            image={AvatarA}
            nameClass="text-customwhite"
            titleClass="text-customwhite/[.5]"
            contentClass="text-customwhite"
            subcontentClass="text-[#CFCFCF]/[.7]"
          />
        <Image src={Apostrophe} alt="Image" className="absolute top-0  right-6 -z-10 xl:right-20" />
        </div>
      </div>
      <div className="col-span-1 rounded-lg px-8 pb-8 pt-[26px] xl:col-start-3 xl:col-end-4 bg-[#48556A]">
        <Card
          name="Jonathan Walters"
          title="Verified Graduate"
          content="The team was very supportive and kept me motivated"
          subcontent="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments
             I’ve made in myself. “"
          image={AvatarB}
          nameClass="text-customwhite"
          titleClass="text-customwhite/[.5]"
          contentClass="text-customwhite"
          subcontentClass="text-customwhite/[.7]"
        />
      </div>
      <div className="col-span-1 rounded-lg px-8 pb-8 pt-[26px] xl:col-start-1 xl:col-end-2  bg-customwhite">
        <Card
          name="Jeanette Harmon"
          title="Verified Graduate"
          content="An overall wonderful and rewarding experience"
          subcontent="“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”"
          image={AvatarC}
          nameClass="text-[#48556A]"
          titleClass="text-[#48556A]/[.5]"
          contentClass="text-[#48556A]"
          subcontentClass="text-[#48556A]/[.7]"
        />
      </div>
      <div className="col-span-1 rounded-lg px-8 pb-8 pt-[26px] xl:col-start-2 xl:col-end-4  bg-[#19202D]">
        <Card
          name="Patrick Abrams"
          title="Verified Graduate"
          content="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy."
          subcontent="“ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.  ”"
          image={AvatarD}
          nameClass="text-customwhite"
          titleClass="text-customwhite/[.5]"
          contentClass="text-[#ECF2F8]"
          subcontentClass="text-customwhite/[.7]"
        />
      </div>
      <div className="col-span-1 rounded-lg px-8 pb-8 pt-[26px] xl:col-start-4 xl:col-end-5 xl:row-start-1 xl:row-end-3  bg-customwhite">
        <Card
          name="Kira Whittle"
          title="Verified Graduate"
          content="Such a life-changing experience. Highly recommended!"
          subcontent="“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!  ”"
          image={AvatarE}
          nameClass="text-[#48556A]"
          titleClass="text-[#48556A]/[.5]"
          contentClass="text-[#48556A]"
          subcontentClass="text-[#48556A]/[.7]"
        />
      </div>
    </main>
  );
}
