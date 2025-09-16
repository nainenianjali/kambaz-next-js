import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> 
              <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/nextjs.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 Next JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>
        <div className="wd-dashboard-course"> 
            <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/c++.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 C++ </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>
             <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/java.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 Java </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>
        <div className="wd-dashboard-course"> 
               <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/python.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 Python </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>

             <div className="wd-dashboard-course"> 
               <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/Bootstrap_logo.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 Bootstrap </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>

             <div className="wd-dashboard-course"> 
               <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/javascript.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 JavaScript </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>

             <div className="wd-dashboard-course"> 
               <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/html.jpg" width={200} height={150} alt={""} />
            <div>
              <h5> CS1234 HTML </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
            </Link>
             </div>

    </div>
);}

