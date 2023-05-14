import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


   const AddNewMovie = () => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      
      // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('root');
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function openModal() {
        setIsOpen(true);
      }
    

    
      function closeModal() {
        setIsOpen(false);
      }

return (


    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form >
          <label >Movie Name</label>
          <input type="text" />
          <label >Movie Poster</label>
          <input type="url" />
          <label>Rating</label>
          <input type="text" />
          <input type="date" />
          <div>
            <button>Confirme</button>
            <button>Cancel</button>
          </div>
        </form>
      </Modal>
    </div>
    
    
  )
}
export default AddNewMovie 
