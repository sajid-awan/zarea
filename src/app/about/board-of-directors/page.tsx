"use client";

import PageHero from "@/components/PageHero";
import { ContactSection, MobileApp, NewsSection } from "@/components/sections";
import BoardGrid, { BoardMember } from "@/components/sections/BoardGrid";





export default function BoardOfDirectors() {
  const boardMembers: BoardMember[] = [
    {
      id: "1",
      name: "Misbah Momin",
      position: "Co-Founder/Chief Executive",
      image: "/images/board/misbah-momin.png"
    },
    {
      id: "2", 
      name: "Ali Alam Qamar",
      position: "CEO & Founder/Supervisor",
      image: "/images/board/ali-alam-qamar.png"
    },
    {
      id: "3",
      name: "Sohail Waqkhat Siddiqui",
      position: "Independent Director",
      image: "/images/board/sohail-wajahat-siddiqui.png"
    },
    {
      id: "4",
      name: "Muhammad Afzal Chaudhry",
      position: "Independent Director", 
      image: "/images/board/muhammad-afzal-chaudhry.png"
    },
    {
      id: "5",
      name: "Meezan Fahd",
      position: "Non-Executive Director",
      image: "/images/board/meezan-fahd.png"
    },
    {
      id: "6",
      name: "Nauman Ul Hassan",
      position: "Executive Director",
      image: "/images/board/nouman-al-hassan.png"
    },
    {
      id: "7",
      name: "Junaid Akram",
      position: "Non-Executive Director",
      image: "/images/board/junaid-akram.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Meet Our Board of Directors"
        description="Our Board of Directors provides leadership, governance, and strategic guidance to drive our mission forward."
      />
      <BoardGrid members={boardMembers} />
      <ContactSection/>
      <MobileApp />
      <NewsSection/>
    </div>
  );
}