import Link from 'next/link';
import { Download, FileText, Users } from 'lucide-react';

type TeacherResourceCardProps = {
  title: string;
  description: string;
  ageGroup: string;
  resourceType: 'lesson' | 'workshop' | 'project' | 'digital' | 'careers';
  downloadUrl?: string;
  pageUrl?: string;
  imageUrl?: string;
};

const resourceTypeIcons = {
  lesson: FileText,
  workshop: Users,
  project: FileText,
  digital: FileText,
  careers: Users,
};

const resourceTypeLabels = {
  lesson: 'Lesson Plan',
  workshop: 'Workshop',
  project: 'Project',
  digital: 'Digital',
  careers: 'Careers',
};

export default function TeacherResourceCard({
  title,
  description,
  ageGroup,
  resourceType,
  downloadUrl,
  pageUrl,
  imageUrl,
}: TeacherResourceCardProps) {
  const Icon = resourceTypeIcons[resourceType];
  
  return (
    <div className="rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      {imageUrl && (
        <div className="relative h-40">
          <img
            src={imageUrl}
            alt={`Preview of ${title}`}
            className="rounded-t-lg object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            <Users className="mr-1 h-3 w-3" />
            {ageGroup}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            <Icon className="mr-1 h-3 w-3" />
            {resourceTypeLabels[resourceType]}
          </span>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-4">
          {downloadUrl ? (
            <Link
              href={downloadUrl}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              download
            >
              <Download className="mr-1 h-4 w-4" />
              Download resource
            </Link>
          ) : pageUrl ? (
            <Link
              href={pageUrl}
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              Access online resource
              <span className="ml-1">→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}