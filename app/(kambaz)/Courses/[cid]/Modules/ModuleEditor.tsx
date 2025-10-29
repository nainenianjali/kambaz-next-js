export default function ModuleEditor({
  show,
  handleClose,
  dialogTitle,
  moduleName,
  setModuleName,
  addModule,
}: {
  show: boolean;
  handleClose: () => void;
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  if (!show) return null;

  return (
    <div 
      className="modal fade show d-block" 
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={handleClose}
    >
      <div 
        className="modal-dialog modal-dialog-centered" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{dialogTitle}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="wd-module-name" className="form-label">
              Module Name
            </label>
            <input
              id="wd-module-name"
              className="form-control"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addModule();
                  handleClose();
                }
              }}
              placeholder="Enter module name"
              autoFocus
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                addModule();
                handleClose();
              }}
              disabled={!moduleName.trim()}
            >
              Add Module
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}