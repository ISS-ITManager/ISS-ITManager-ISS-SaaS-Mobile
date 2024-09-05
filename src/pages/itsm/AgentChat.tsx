

import MasterComponent from '../../components/layouts/MasterComponent'
import TitleComponent from '../../components/layouts/TitleComponent';

const AgentChat = () => {
  return (
    <MasterComponent page="home">
      <TitleComponent title={"Agent Chat"} />
      <div className="message-container">
        <div className="message-bubble sender">
          <div className="message-info">
            <p className="message-date">{Date()}</p>
            <p className="message-subject">Good Day!</p>
          </div>
          <div
            className="message-content"
          // dangerouslySetInnerHTML={{ __html: }}
          >How can I help you today?</div>
        </div>
      </div>

      <div className="shadow-xs">

        <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3rd">
            <input type="text" className="form-control"
              placeholder="Type message"/>
            <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
        </div>
    </div>

    </MasterComponent>
  )
}

export default AgentChat;