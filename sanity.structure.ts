import { StructureBuilder } from 'sanity/desk';
import { 
  FiArchive, 
  FiBookOpen, 
  FiCalendar, 
  FiFileText, 
  FiUsers, 
  FiVideo,
  FiStar,
  FiLayers,
  FiHome,
  FiLayout,
  FiGrid,
  FiSettings
} from 'react-icons/fi';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Site Settings - Singleton
      S.listItem()
        .title('Site Settings')
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      
      S.divider(),
      
      // Homepage Sections
      S.listItem()
        .title('Homepage')
        .icon(FiLayout)
        .child(
          S.list()
            .title('Homepage Sections')
            .items([
              S.listItem()
                .title('All Sections')
                .icon(FiGrid)
                .child(
                  S.documentTypeList('homepageSection')
                    .title('All Homepage Sections')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.divider(),
              // Individual section types for easier editing
              S.listItem()
                .title('Hero Section')
                .icon(FiStar)
                .child(
                  S.documentTypeList('homepageSection')
                    .title('Hero Sections')
                    .filter('_type == "homepageSection" && sectionId == "hero"')
                ),
              S.listItem()
                .title('About Section')
                .child(
                  S.documentTypeList('homepageSection')
                    .title('About Sections')
                    .filter('_type == "homepageSection" && sectionId == "about"')
                ),
              S.listItem()
                .title('Featured Artefacts Section')
                .child(
                  S.documentTypeList('homepageSection')
                    .title('Featured Artefacts Sections')
                    .filter('_type == "homepageSection" && sectionId == "featured-artifacts"')
                ),
              S.listItem()
                .title('Community Section')
                .child(
                  S.documentTypeList('homepageSection')
                    .title('Community Sections')
                    .filter('_type == "homepageSection" && sectionId == "community"')
                ),
              S.listItem()
                .title('Field School Section')
                .child(
                  S.documentTypeList('homepageSection')
                    .title('Field School Sections')
                    .filter('_type == "homepageSection" && sectionId == "field-school"')
                ),
              S.listItem()
                .title('News Section')
                .child(
                  S.documentTypeList('homepageSection')
                    .title('News Sections')
                    .filter('_type == "homepageSection" && sectionId == "news"')
                ),
            ])
        ),
      
      // Museum section
      S.listItem()
        .title('Digital Museum')
        .icon(FiArchive)
        .child(
          S.list()
            .title('Digital Museum')
            .items([
              S.listItem()
                .title('All Artefacts')
                .icon(FiArchive)
                .child(
                  S.documentTypeList('artefact')
                    .title('All Artefacts')
                ),
              S.listItem()
                .title('Featured Artefacts')
                .icon(FiStar)
                .child(
                  S.documentTypeList('artefact')
                    .title('Featured Artefacts')
                    .filter('_type == "artefact" && featured == true')
                ),
              S.divider(),
              // Group by period
              S.listItem()
                .title('By Period')
                .icon(FiLayers)
                .child(
                  S.documentTypeList('artefact')
                    .title('Select Period')
                    .menuItems([
                      S.menuItem()
                        .title('Group by Period')
                        .icon(FiLayers)
                        .action(() => {
                          // This will group artefacts by period
                          return S.documentTypeList('artefact')
                            .title('Artefacts by Period')
                            .child(id => 
                              S.documentList()
                                .title('Artefacts')
                                .filter('_type == "artefact" && period == $period')
                                .params({ period: id })
                            );
                        })
                    ])
                ),
            ])
        ),
      
      // News & Events
      S.listItem()
        .title('News & Events')
        .icon(FiCalendar)
        .child(
          S.list()
            .title('News & Events')
            .items([
              S.listItem()
                .title('Blog Posts')
                .icon(FiFileText)
                .child(S.documentTypeList('post').title('Blog Posts')),
              S.listItem()
                .title('Events')
                .icon(FiCalendar)
                .child(S.documentTypeList('event').title('Events')),
            ])
        ),
      
      // Education
      S.listItem()
        .title('Education')
        .icon(FiBookOpen)
        .child(
          S.list()
            .title('Education')
            .items([
              S.listItem()
                .title('Educational Resources')
                .child(S.documentTypeList('educationResource').title('Educational Resources')),
              S.listItem()
                .title('Sensory Stories')
                .child(S.documentTypeList('sensoryStory').title('Sensory Stories')),
              S.listItem()
                .title('Dementia Resources')
                .child(S.documentTypeList('dementiaResource').title('Dementia Resources')),
              S.listItem()
                .title('Research Publications')
                .child(S.documentTypeList('researchPublication').title('Research Publications')),
            ])
        ),
      
      // About
      S.listItem()
        .title('About')
        .icon(FiUsers)
        .child(
          S.list()
            .title('About')
            .items([
              S.listItem()
                .title('Team Members')
                .child(S.documentTypeList('teamMember').title('Team Members')),
              S.listItem()
                .title('Testimonials')
                .child(S.documentTypeList('testimonial').title('Testimonials')),
              S.listItem()
                .title('Sponsors')
                .child(S.documentTypeList('sponsor').title('Sponsors')),
              S.listItem()
                .title('Partners')
                .child(S.documentTypeList('partner').title('Partners')),
            ])
        ),
      
      // Media
      S.listItem()
        .title('Media')
        .icon(FiVideo)
        .child(
          S.list()
            .title('Media')
            .items([
              S.listItem()
                .title('Videos')
                .child(S.documentTypeList('video').title('Videos')),
              S.listItem()
                .title('Timeline Entries')
                .child(S.documentTypeList('timelineEntry').title('Timeline Entries')),
            ])
        ),
      
      // Pages
      S.listItem()
        .title('Pages')
        .icon(FiHome)
        .child(S.documentTypeList('page').title('Pages')),
      
      // Show the rest of the document types
      ...S.documentTypeListItems().filter(
        listItem => !['siteSettings', 'homepageSection', 'artefact', 'post', 'event', 'educationResource', 'sensoryStory', 'dementiaResource', 'researchPublication', 'teamMember', 'testimonial', 'sponsor', 'partner', 'video', 'timelineEntry', 'page'].includes(listItem.getId() as string)
      ),
    ]);
