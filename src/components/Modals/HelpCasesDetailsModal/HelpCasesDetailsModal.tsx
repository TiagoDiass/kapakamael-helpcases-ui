import Modal from 'react-modal';
import { useModalsContext } from 'contexts/Modals.context';
import * as S from './HelpCasesDetailsModal.styles';
import { FaWhatsapp } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.css';

/**
 * @component Modal de detalhes de um quadrinho / comic
 */
export default function ComicDetailsModal() {
  const KAPA_KAMAEL_PHONE = process.env.NEXT_PUBLIC_KAPA_KAMAEL_PHONE;
  const {
    isHelpCaseDetailsModalOpen,
    closeHelpCaseDetailsModal,
    currentHelpCase: helpCase,
  } = useModalsContext();

  const getWhatsappContactUrl = () => {
    return `https://api.whatsapp.com/send?phone=${KAPA_KAMAEL_PHONE}&text=${encodeURIComponent(
      `Olá, gostaria de ajudar no caso "${helpCase.title}"`
    )}!`;
  };

  const getImageContent = () => {
    if (helpCase.pictures.length === 1) {
      return (
        <S.HelpCasePictures picturesAmount={1}>
          <img src={helpCase.pictures[0]} alt={`Foto do caso "${helpCase.title}"`} />
        </S.HelpCasePictures>
      );
    } else if (helpCase.pictures.length === 2) {
      return (
        <S.HelpCasePictures picturesAmount={2}>
          <img src={helpCase.pictures[0]} alt={`Foto do caso "${helpCase.title}"`} />
          <img src={helpCase.pictures[1]} alt={`Foto do caso "${helpCase.title}"`} />
        </S.HelpCasePictures>
      );
    } else {
      return (
        <div>
          <Carousel showArrows={true} width='700px' showIndicators={false} showThumbs={false}>
            {helpCase.pictures.map(pic => (
              <div>
                <img src={pic} alt={`Imagem anexada no caso "${helpCase.title}"`} />
              </div>
            ))}
          </Carousel>
        </div>
      );
    }
  };

  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isHelpCaseDetailsModalOpen}
      ariaHideApp={process.env.NODE_ENV !== 'test'} // configuração pro react-modal não dar erros no console sobre não setar um elemento root durante os testes automatizados
      onRequestClose={closeHelpCaseDetailsModal}
    >
      {helpCase && (
        <S.ModalContentContainer>
          <button
            title='Fechar modal de detalhes'
            type='button'
            onClick={closeHelpCaseDetailsModal}
            className='react-modal-close'
          >
            <img src='/images/close.svg' alt='Fechar modal de detalhes' />
          </button>

          <div className='details'>
            <h2>Detalhes do caso</h2>
            <h3>Título: {helpCase.title}</h3>
            <p>Descrição: {helpCase.description}</p>

            {!!helpCase.pictures.length && getImageContent()}

            {!!helpCase.poolMoneyUrl && (
              <a
                rel='noopener noreferrer'
                target='_blank'
                className='button poolMoney-link'
                href={helpCase.poolMoneyUrl}
              >
                Clique aqui para ajudar na vaquinha
              </a>
            )}

            <a target='_blank' className='button whatsapp-link' href={getWhatsappContactUrl()}>
              Entrar em contato pelo Whatsapp <FaWhatsapp />
            </a>
          </div>
        </S.ModalContentContainer>
      )}
    </Modal>
  );
}
