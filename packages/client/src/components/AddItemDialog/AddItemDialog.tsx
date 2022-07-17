import ReactDOM from "react-dom";
import './AddItemDialog.css';

export default function AddItemDialog(props: { onCreateClicked: React.FormEventHandler<HTMLFormElement>, onCancelClicked : () => void }) {
    return ReactDOM.createPortal((
        <aside
            role="dialog"
            tabIndex={-1}
            aria-modal="true"
            className="modal-cover"
        >
            <div className="modal-body">
            <form onSubmit={props.onCreateClicked}>
                <div className="form-group">
                    <input className="form-control" id="description" placeholder="Description" />
                </div>
                <div className="add-dialog-button-group">
                    <button className="button" type="submit">
                        Create
                    </button>
                    <button className="button" type="button" onClick={e=>props.onCancelClicked()}>
                        Cancel
                    </button>
                </div>
                </form>
                </div>
            </aside>
        ), document.body);
}