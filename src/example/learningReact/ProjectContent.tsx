import React from "react";

export default function ProjectContent(props: projectContentProps) {
  return (
    <>
      <h2>Top Part</h2>
      {props.children}
      <h2>Bottom Part</h2>
      {props.bottomPart}
    </>
  );
}

interface projectContentProps {
  //default name for parameter that deals with content...if theres only 1... other names if we want to use more
  //so you have to explicitly fill out that specific param in the parent component
  children: React.ReactNode;
  bottomPart: React.ReactNode;
}
