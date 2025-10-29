import { FaTrash, FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary"
        style={{ cursor: "pointer" }}
        title="Edit module"
      />
      <FaTrash
        className="text-danger"
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this module?")) {
            deleteModule(moduleId);
          }
        }}
        style={{ cursor: "pointer" }}
        title="Delete module"
      />
      <GreenCheckmark />
      <BsPlus className="fs-2" style={{ cursor: "pointer" }} title="Add content" />
      <IoEllipsisVertical className="fs-4" style={{ cursor: "pointer" }} title="More options" />
    </div>
  );
}