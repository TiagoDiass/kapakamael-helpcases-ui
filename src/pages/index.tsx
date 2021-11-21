import { HelpCase } from '@types';
import Head from 'next/head';
import { FaLifeRing } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';

import * as S from 'styles/pages/home.styles';
import { useModalsContext } from 'contexts/Modals.context';

/**
 * @page Página Home
 */
export default function Home() {
  const { openHelpCaseDetailsModal } = useModalsContext();

  const helpCases: HelpCase[] = [
    {
      id: '3ddb62e8-f41a-4820-9939-faf2c21b5f94',
      title: 'Cadelinha atropelada',
      description: `Uma cadelinha chamada Mel foi atropelada no cruzamento da décima com a quarta avenida, 
        e agora, ela precisará passar por cirurgia para que possa se recuperar. 
        O valor para ajuda na cirurgia é de R$ 200,00.`,
      pictures: [],
      poolMoneyUrl: 'https://www.facebook.com/tiago.costadias/',
    },
    {
      id: '3ddb62e8-f41a-4820-9939-faf2c21b5f95',
      title: 'Doações',
      description: `Como em todo mês, estamos precisando de doações para conseguir arcar
        com os custos, alimentar os animais, comprar seus remédios, etc.
        Você pode doar o quanto quiser. :)`,
      pictures: [],
      poolMoneyUrl: undefined,
    },
    {
      id: '3ddb62e8-f41a-4820-9939-faf2c21b5f96',
      title: 'Cãozinho encontrado abandonado',
      description: `Um cãozinho foi encontrado abandonado no bairro Jardim Leopoldo, próximo ao centro
        da cidade, estamos tratando dele e ele está procurando por um novo lar. 
        Ele é muito dócil e brincalhão, aparenta ter 2 anos de idade.`,
      pictures: ['https://source.unsplash.com/720x1280/?dog'],
      poolMoneyUrl: undefined,
    },
    {
      id: '3ddb62e8-f41a-4820-9939-faf2c21b5f97',
      title: 'Animais para adoção',
      description: `Como todo mês, estamos com muitos animais que precisam encontrar um novo lar.
        Temos 7 cães e 3 gatinhos que estão esperando alguém adotá-los. Já pensou em adotar um novo pet?`,
      pictures: [
        // 'https://images.unsplash.com/photo-1512723185835-0700e5069a9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0fHx8fHx8MTYzNzUyMjE3Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000',
        // 'https://images.unsplash.com/photo-1511732351157-1865efcb7b7b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0fHx8fHx8MTYzNzUyMjIyNQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000',
        'https://source.unsplash.com/1400x900/?dog',
        'https://source.unsplash.com/1400x900/?dog',
        'https://source.unsplash.com/1400x900/?dog',
        'https://source.unsplash.com/1400x900/?dog',
        'https://source.unsplash.com/1400x900/?dog',
        'https://source.unsplash.com/1400x900/?dog',
        'https://source.unsplash.com/1400x900/?dog',
        // 'https://images.unsplash.com/photo-1482066490729-6f26115b60dc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGV0fHx8fHx8MTYzNzUyMjIwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1000',
        'https://source.unsplash.com/1400x900/?kitty',
        'https://source.unsplash.com/1400x900/?kitty',
        'https://source.unsplash.com/1400x900/?kitty',
      ],
      poolMoneyUrl: undefined,
    },
    {
      id: '3ddb62e8-f41a-4820-9939-faf2c21b5f98',
      title: 'Gatinho resgatado',
      description: `Resgatamos um gatinho chamado Luíz de um lar que o maltratava. Ele está ansioso por conhecer seu novo lar. Quer adotá-lo?`,
      pictures: [
        'https://www.artfulpawsphotography.com/wp-content/uploads/2019/08/fairfax-cat-photographer-studio-cat-photo-session-9390.jpg',
        'https://www.artfulpawsphotography.com/wp-content/uploads/2019/08/fairfax-cat-photographer-studio-cat-photo-session-9705.jpg',
      ],
      poolMoneyUrl: undefined,
    },
  ];

  return (
    <>
      <Head>
        <title>KapaKamael | Casos de ajuda</title>
      </Head>

      <S.HomeContainer>
        <S.HomeHeading>
          <h1>
            Casos de ajuda <FaLifeRing />
          </h1>
          <p>Estes são os casos nos quais precisamos da sua ajuda</p>
        </S.HomeHeading>

        {helpCases.length > 0 ? (
          <S.HelpCasesWrapper>
            {helpCases.map(helpCase => (
              <S.HelpCaseBlock key={helpCase.id}>
                <h4 className='title'>{helpCase.title}</h4>

                <p className='description'>{helpCase.description}</p>

                <button
                  className='details-button'
                  onClick={() => openHelpCaseDetailsModal(helpCase)}
                >
                  Ver detalhes deste caso <BsFillEyeFill />{' '}
                </button>
              </S.HelpCaseBlock>
            ))}
          </S.HelpCasesWrapper>
        ) : (
          <S.NothingFound>
            <p>Parece que ainda não há nenhum caso cadastrado, volte aqui depois 😇</p>
          </S.NothingFound>
        )}
      </S.HomeContainer>
    </>
  );
}
