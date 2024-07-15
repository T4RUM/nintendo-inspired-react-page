import React from "react";
import styled from "styled-components";
import { Container, Accordion } from "react-bootstrap";


const StyledAccordion = styled.div`
  .headerAccordion {
    background-color: #f0f0f0;
    padding: 10px;
    font-weight: bold;
  }

  p {
    margin-bottom: 15px;
  }
`;

function Policy() {
  return (
    <>
      <Container>
        <h1 className="mb-4">Política de Privacidade da Nintendo</h1>
      </Container>

      <Container>
        <p>
          Sua privacidade é importante para nós. Nossa política de privacidade
          se destina a auxiliá-lo a conhecer os tipos de informações que
          coletamos, como as utilizamos e compartilhamos e como as protegemos.
          Esta política abrange nosso uso de informações que podem ou poderiam
          ser usadas para identificar você, mas não abrange informações que não
          podem ser usadas para identificar você. Esta política se aplica a
          todos os serviços da Nintendo diretamente citados ou relacionados a
          ela, mas não se aplica aos serviços da Nintendo vinculados a políticas
          de privacidade específicas.
        </p>
      </Container>

      <StyledAccordion>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="headerAccordion">
              1. Como utilizamos suas informações
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Utilizamos suas informações para prestar, manter e aperfeiçoar
                nossos serviços, incluindo para executar a resolução de
                problemas, fazer análises de dados, testes, pesquisas, análises
                estatísticas e sondagens. Também utilizamos suas informações
                para oferecer serviços solicitados por você, desenvolver novos
                serviços, sugerir recursos relevantes individualmente, oferecer
                a você conteúdo personalizado, permitir que você participe em
                funcionalidades interativas, gerenciar sua conta, exibir
                anúncios personalizados, enviar a você materiais promocionais
                nossos ou de nossos afiliados e parceiros de negócios de
                confiança, manter nossos serviços, empresa e usuários seguros e
                protegidos, cumprir as leis e os regulamentos aplicáveis, evitar
                fraudes e para proteger ou exercer nossos direitos legais ou nos
                defendermos em processos judiciais.
              </p>
              <p>
                Ao sermos contatados por você, utilizaremos as informações
                fornecidas para resolver os possíveis problemas relacionados à
                sua utilização dos nossos serviços. Também utilizaremos
                informações, como seu endereço de e-mail ou número de telefone,
                para envio de respostas quando entrar em contato, para
                informá-lo sobre mudanças em nossas políticas e termos, bem como
                mudanças ou melhorias em nossos serviços e sobre outros serviços
                oferecidos.
              </p>
              <p>
                Poderemos utilizar cookies ou outras tecnologias semelhantes em
                alguns dos recursos de nossos serviços. Cookies são arquivos
                pequenos, em geral baixados pelo navegador do seu dispositivo.
                Também podemos permitir que nossos provedores de serviços
                terceirizados estabeleçam cookies e tecnologias semelhantes em
                nossos serviços para executar várias funções de análise e
                fornecer anúncios direcionados que possam ser relevantes para
                você. Para saber mais sobre como nós ou nossos provedores de
                serviços terceirizados podemos usar esses cookies ou para
                gerenciar suas preferências relacionadas à coleta e ao uso de
                cookies em todo nosso site e serviços, acesse aqui.
              </p>
              <p>
                Nós não vendemos nem venderemos sua informação a terceiros. No
                entanto, permitimos que provedores de serviços terceirizados
                coletem informações pessoais, como descrito aqui, por meio de
                alguns de nossos serviços, e nós compartilhamos informações
                pessoais com provedores de serviços terceirizados para fins
                comerciais, como descrito nesta política, incluindo, mas não
                limitado a isso, fornecer anúncios em nossos serviços e em
                outros lugares, com base nas atividades on-line dos usuários ao
                longo do tempo e em diferentes sites, serviços e dispositivos.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              2. Seus controles, opções e direitos
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Oferecemos determinados controles e opções a respeito da coleta,
                utilização e compartilhamento das informações. Esses controles e
                opções incluem a possibilidade de atualização, correção ou
                exclusão das informações fornecidas ou das informações coletadas
                em decorrência da sua utilização de nossos serviços. Também
                haverá a possibilidade de cancelar o recebimento de
                notificações, promoções, ofertas ou outros anúncios.
              </p>
              <p>
                Você pode ter o direito, segundo as leis de proteção de dados
                aplicáveis, de solicitar acesso, correção ou exclusão de sua
                informação. Veja aqui as instruções sobre como fazer essa
                solicitação.
              </p>
              <p>
                Não faremos quaisquer discriminações contra você por exercer
                seus direitos e opções, porém algumas funcionalidades e recursos
                dos nossos serviços poderão mudar ou poderão não estar mais
                disponíveis para você.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              3. Retenção e segurança das informações
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Suas informações somente serão retidas durante o período de
                tempo razoavelmente necessário para os fins estabelecidos nesta
                política de privacidade e em conformidade com a lei aplicável.
              </p>
              <p>
                Implementamos medidas de segurança de natureza administrativa,
                física e técnica destinadas a protegê-lo de perda, apropriação e
                uso indevidos, acesso não autorizado, divulgação, alteração e
                destruição de suas informações. No entanto, você deve
                compreender que, apesar de nossos esforços, nenhuma estrutura de
                segurança pode ser garantida como impenetrável. Por favor,
                observe que a informação coletada por terceiros poderá não ter
                as mesmas proteções de segurança que a informação submetida a
                nós, e nós não somos responsáveis por proteger a segurança de
                tal informação.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>4. Informações sobre crianças</Accordion.Header>
            <Accordion.Body>
              Não coletamos, utilizamos ou compartilhamos intencionalmente
              informações de crianças menores de 12 anos sem autorização
              comprovada dos pais ou permissão legal. Caso o pai, mãe ou
              guardião legal autorize, a criança poderá usar a conta Nintendo
              dele ou dela para jogar certos jogos e executar aplicativos de
              parceiros terceirizados que não são publicados pela Nintendo.
              Pais, mães ou guardiões legais poderão avaliar, modificar, ou
              excluir as informações pessoais da criança ou revogar a
              autorização fornecida entrando em contato conosco de acordo com as
              informações de contato definidas abaixo, e poderão gerenciar quais
              jogos e aplicativos de parceiros terceirizados podem acessar e
              usar as informações da conta Nintendo da criança por meio das
              configurações de perfil da sua conta Nintendo.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>5. Mudanças</Accordion.Header>
            <Accordion.Body>
              A Nintendo poderá eventualmente atualizar esta política de
              privacidade. Ao atualizá-la, alteraremos a data da "Última
              atualização" definida acima. Se fizermos alterações importantes na
              forma de coletar, utilizar, reter ou compartilhar suas informações
              pessoais, enviaremos uma notificação por e-mail no último endereço
              de e-mail fornecido, ou publicaremos notificações sobre as
              alterações nos serviços abrangidos nesta política de privacidade.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>6. Informações de contato</Accordion.Header>
            <Accordion.Body>
              Em caso de perguntas, dúvidas ou comentários a respeito de nossa
              política de privacidade ou alguma de nossas práticas de
              privacidade, entre em contato conosco através do e-mail
              dataprotectionofficer@noa.nintendo.com, do telefone
              1-888-977-7627, ou pelo correio no endereço: Nintendo of America
              Inc., A/C: Privacy Administrator, 4600 150th Avenue NE, Redmond,
              WA 98052, EUA.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </StyledAccordion>
    </>
  );
}

export default Policy;
