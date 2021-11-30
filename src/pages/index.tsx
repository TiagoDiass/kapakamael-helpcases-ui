import { APIHelpCase, HelpCase } from '@types';
import Head from 'next/head';
import { FaLifeRing } from 'react-icons/fa';
import { BsFillEyeFill } from 'react-icons/bs';

import * as S from 'styles/pages/home.styles';
import { useModalsContext } from 'contexts/Modals.context';
import { useEffect, useState } from 'react';
import api from 'services/api';

/**
 * @page Página Home
 */
export default function Home() {
  const { openHelpCaseDetailsModal } = useModalsContext();
  const [helpCases, setHelpCases] = useState<HelpCase[]>([]);

  useEffect(() => {
    async function fetchCases() {
      const { data } = await api.get<{ data: APIHelpCase[] }>('/help-cases');

      setHelpCases(data.data);
    }

    fetchCases();
  }, []);

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
