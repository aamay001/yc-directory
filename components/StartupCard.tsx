/* eslint-disable @next/next/no-img-element */
import React from "react";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

export interface StartupTypeCard {
  _createdAt: Date;
  _id: number;
  author: {
    _id: number;
    name: string;
  };
  category: string;
  description: string;
  image: string;
  title: string;
  views: number;
}

interface StartupCardProps {
  post: StartupTypeCard;
}

function StartupCard(props: StartupCardProps) {
  const { 
    _createdAt, 
    _id, 
    author, 
    category,
    description, 
    image, 
    title, 
    views, 
  } = props.post;
  
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(_createdAt.toDateString())}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">
              {author.name}
            </p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>

        <Link href={`/user/${author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`startup/${_id}`}>
        <p className="startup-card_desc">
          {description}
        </p>

        <img 
          src={image} 
          alt="placeholder" 
          className="startup-card_img" 
        />

        <div className="flex-between gap-3 mt-5">
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn">
            <Link href={`/startup/${_id}`}>
              Details
            </Link>
          </Button>
        </div>
      </Link>
    </li>
  );
}

export default StartupCard;
