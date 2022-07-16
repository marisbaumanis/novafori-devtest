import ReactDOM from "react-dom";

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
                <div className="form-group">
                    <button className="form-control btn btn-primary" type="submit">
                        Create
                    </button>
                    <button className="form-control btn btn-primary" type="button" onClick={e=>props.onCancelClicked()}>
                        Cancel
                    </button>
                </div>
                </form>
                </div>
            </aside>
        ), document.body);
}