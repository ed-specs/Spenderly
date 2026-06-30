"use client";
import Navigation from "@/app/ui/components/Navigation";
import MainContainer from "@/app/ui/components/MainContainer";
import LayoutContainer from "../ui/components/LayoutContainer";

export default function Dashboard() {
  return (
    <LayoutContainer>
      <Navigation />
      <MainContainer></MainContainer>
    </LayoutContainer>
  );
}
