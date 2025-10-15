"use client"
import { usePathname, useParams } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
  
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];
  
  return (
    <ListGroup id="wd-courses-navigation" className="fs-5 rounded-0">
      {links.map((link) => {
        // Special case for People to navigate to People/Table
        const href = link === "People" 
          ? `/Courses/${cid}/People/Table` 
          : `/Courses/${cid}/${link}`;
        
        return (
          <ListGroupItem 
            key={link} 
            as={Link} 
            href={href} 
            action 
            className={`border border-0 ${ 
              pathname.includes(link) ? "bg-white text-black" : "text-danger" 
            }`}
          >
            {link}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}