import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";


export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  tags: string[];
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description,tags } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
      <div class="text-sm">{
          tags && (
            <div class="flex flex-wrap gap-1 py-2">
            <span class="tag-title font-extrabold uppercase text-offset">Tagged:</span>
            {tags?.map((tag) => (
              <span class="tag px-1 py-0 text-zinc-900 rounded-md transition w-fit"> 
             <a href={"/tags/"+tag}> {tag}</a>
              </span>
            ))}
            </div>
            )
          }
        </div>
    </li>
  );
}
