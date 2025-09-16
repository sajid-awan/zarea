"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export interface BoardMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

interface BoardGridProps {
  members: BoardMember[];
}

function BoardMemberCard({ member }: { member: BoardMember }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-zarea-light-gray mb-4 sm:mb-6">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,' + btoa(`
              <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#f3f4f6"/>
                <circle cx="150" cy="120" r="40" fill="#d1d5db"/>
                <path d="M150 180 C110 180, 80 210, 80 245 L220 245 C220 210, 190 180, 150 180 Z" fill="#d1d5db"/>
              </svg>
            `);
          }}
        />
      </div>
      <div className="flex">
      <div className="text-left flex-1">
        <h3 className="text-lg sm:text-xl  font-bold text-zarea-black leading-[125%]">
          {member.name}
        </h3>
        <p className="text-lg sm:text-lg  font-bold text-zarea-gray leading-[125%]">
          {member.position}
        </p>
        </div>
       <Link href={`#`} className="ml-2 mt-1 text-zarea-primary-orange">
       <Icon icon="ic:round-plus" className="w-8 h-8" />
       </Link>
      </div>

    </div>
  );
}

export default function BoardGrid({ members }: BoardGridProps) {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {members.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}