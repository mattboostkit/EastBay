import { Metadata } from 'next';
import Image from 'next/image';
import { Users } from 'lucide-react';
import { SectionDivider } from '@/components/SectionDivider';
import StoryForm from './StoryForm';

export const metadata: Metadata = {
  title: 'Folkestone Stories | East Wear Bay Project',
  description: 'An oral history project collecting local memories and stories about East Wear Bay, creating a social history archive alongside the archaeological record.',
};

interface Story {
  author: string;
  content: string[];
}

const stories: Story[] = [
  {
    author: "Lindsay",
    content: [
      "My first memory of the East Wear Bay project is a site visit that I carried out as part of my job interview for CAT. I went with Alison, who was the Director of the Trust at the time, and she made me feel very at ease during the car journey over.",
      "On arriving at the site, I was faced with this incredible view of the English Channel with the most subtle view of the French coastline across the water. There was a small group of highly focused volunteers working on a trench, which had clearly not been open for long. After spotting some of my most favourite archaeological artefacts poking out of the ground (quernstones), I had the chance to speak to the staff and volunteers. From this I understood that the project was an important one and there was clearly a high level of knowledge in the team. I was impressed and keen to get involved.",
      "It wasn't until nearly a full year later that I returned to East Wear Bay to run a host of public engagement activities for the project. It was only then that I appreciated how little I had understood about the importance of the project to the community. The archaeology is significant and is key to our understanding of the Iron Age to Roman period transition in Britain. However, the way that the project inspires people, brings them together and creates a common bond is really special.",
      "There is nothing better than walking onto site early on a summer's morning, smelling freshly cut grass and newly turned soil, feeling the warm sun on your face, being greeted cheerfully by volunteers and passing dog walkers, and feeling like you are part of something much bigger than yourself."
    ]
  },
  {
    author: "Sawney",
    content: [
      "Some of the best fun I've ever had has been on student digs. I'm not a morning person, so being eager to get up at five am to go and do physical labour in a field all day really means something to me.",
      "When I decided to volunteer some time on the weekends to join the crew at East Wear Bay this summer, I recaptured that energy. I woke up early, marched across town to the bus, climbed up the hill to the cliff with my inhaler in hand, and had to stop at the crest.",
      "The view from the site is just beautiful, especially when the mist still lingers in the morning. Standing and looking out to sea- on a clear day you can just see France- or up at the chalk cliffs to the north, you really understand how the Romans chose where to put their villa. It's one of those places you just know you're having the same experience people have had in this space all throughout history.",
      "Once I caught my breath and made my way onto site, the real fun began. As we worked, we chatted, sometimes yelling conversations from opposing ditches, one big forum open to all. I got to know students just starting out- one had travelled all the way from my alma mater in Australia- and volunteer veterans who had been involved with the site since I was still in school. Everyone had a story, several had first met on this cliff years ago and formed lasting friendships, some were just getting to know each other.",
      "Something about this site and these people brought something of that spark back into what had become mundane to me, doing archaeology as a day job. I'll definitely have to take another busman's holiday down to Folkestone next year."
    ]
  },
  {
    author: "Peter Butcher",
    content: [
      "In 2011 I stood looking through the gridded fence surrounding a pile of what looked like stones in a straight line 'WALL', I watched as people that I had never met dug and scraped the clay. Strange patches of soil were visible, different colours and shapes. Then a voice said \"you OK mate\" YES \"can you dig \" YES \" then come in and give us a hand.",
      "14 years later, I have been very privileged to meet and become great friends with lots of professional and amateur archaeologists, some of this country's best. These professionals have given us their time, knowledge and friendship and we have learnt so much about what was here in Folkestone and Britain thousands of years ago.",
      "The stones were walls of a second century villa built on top of a first century villa. The strange colours and shapes in the soil are features 'pits and ditches', fill of the features with their different colours.",
      "So what have I gained from this one dig?",
      "The knowledge that it doesn't matter about your academic level or skills, you will be allowed to join in and learn. As long as you bring cake or biscuits. I have LOVED every year that I have dug at East Wear Bay, every ditch, every pit, every quern stone and there have been rather a lot of them."
    ]
  }
];

export default function FolkestoneStoriesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] overflow-hidden bg-gradient-to-b from-bronze-900 to-stone-900" aria-labelledby="hero-heading">
        <Image
          src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg"
          fill
          priority
          alt="Community members sharing stories at East Wear Bay"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" aria-hidden="true" />

        <div className="container relative z-10 flex h-full min-h-[50vh] flex-col items-center justify-center text-white">
          <div className="animate-fade-up text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-bronze-600/20 px-4 py-2 backdrop-blur-sm">
              <Users className="h-4 w-4 text-bronze-300" />
              <span className="text-sm font-medium text-bronze-100">Oral History Project</span>
            </div>

            <h1 id="hero-heading" className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-white drop-shadow-2xl md:text-6xl">
              Folkestone Stories
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-gray-100 drop-shadow-lg md:text-2xl">
              An oral history project collecting local memories and stories about East Wear Bay, creating a social history archive alongside the archaeological record.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* Introduction Section */}
      <section className="bg-gradient-to-br from-sand-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="card-archaeological p-8 md:p-12">
              <p className="text-lg leading-relaxed text-stone-700">
                The East Wear Bay project is more than just archaeology - it's about the people who make it happen. Through our oral history project, we're collecting the memories, experiences, and stories of those who have been part of this remarkable journey. From volunteers who have dug countless trenches to staff members who have dedicated years to the site, each story adds to the rich social history of this project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="dots" />

      {/* Stories Section */}
      <section className="bg-gradient-to-b from-white to-sand-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-16">
            {stories.map((story, index) => (
              <div key={index} className="card-archaeological hover-lift p-8 md:p-12">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-bronze-600 to-bronze-700">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-bronze-700">{story.author}</h2>
                </div>

                <div className="space-y-6">
                  {story.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg leading-relaxed text-stone-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="wave" />

      {/* More to Follow Section */}
      <section className="bg-gradient-to-br from-bronze-50 to-copper-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <div className="card-archaeological p-8 md:p-12">
              <h2 className="text-3xl font-bold text-bronze-700 mb-4">More Stories to Come</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                This is just the beginning of our oral history collection. We continue to gather stories from the many people who have been part of the East Wear Bay project over the years. Each voice adds to our understanding of why this project matters to the community.
              </p>
              <p className="mt-6 text-xl font-semibold text-bronze-600 italic">
                More to follow…
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="archaeological" />

      {/* Share Your Story Section */}
      <section className="bg-gradient-to-br from-sand-50 to-white py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bronze-700 mb-6">Share Your Story</h2>
              <p className="text-lg leading-relaxed text-stone-700">
                Have you been part of the East Wear Bay project? We'd love to hear your story and add it to our oral history archive. Your experiences and memories are an important part of this project's legacy.
              </p>
            </div>

            <div className="card-archaeological p-8 md:p-12">
              <StoryForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
