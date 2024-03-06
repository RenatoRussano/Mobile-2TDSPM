import React from 'react';
import { StatusBar, View, Text, Image, Dimensions, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const App = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        {Platform.OS === 'android' && <SafeAreaView style={{ flex: 0, backgroundColor: '#f55b5a' }} />}
        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor="#f55b5a" />
          <View style={{ height: 150, backgroundColor: '#f55b5a', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
            <Image source={require('./assets/menu_white.png')} style={{ width: 25, height: 25, opacity: 0.8 }} />
            <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 10 }}>
              <Text style={{ fontFamily: 'Poppins', fontSize: 14, color: 'white' }}>RM99892 | RM551325</Text>
              <Text style={{ fontFamily: 'Poppins', fontSize: 8, color: 'white' }}>Livia Freitas Ferreira & Renato Sanches Russano Rome</Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: '#f55b5a', borderRadius: 9 }}>
              <Image
                source={require('./assets/avatar.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#f0e8e7',
                }}
              />
            </View>
          </View>
          <View style={{ height: 30, backgroundColor: '#fe8da0', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20 }}>
            <Image source={require('./assets/return.png')} style={{ width: 12, height: 12, opacity: 0.2 }} />
            <Text style={{ fontFamily: 'Poppins', fontSize: 10, color: '#f0e8e7', marginLeft: 10 }}> / home / #599ba8 / #f55b5a / #f0e8e7</Text>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>

            <Text style={{ fontFamily: 'Poppins', fontSize: 32, fontWeight: 'bold', color: '#f55b5a' }}>{'\n'}2TDSPM{'\n'}</Text>

            <Text style={{ fontFamily: 'Poppins', fontSize: 25, fontWeight: 'bold', color: 'black' }}>A teoria do Design Centrado no Usuário</Text>

            <Text style={{ fontFamily: 'Poppins', fontSize: 12, color: 'black', marginTop: 10 }}>                
                  A Teoria do Design Centrado no Usuário (UCD - User-Centered Design) é uma abordagem que coloca os usuários no centro 
                  do processo de design, com o objetivo de criar produtos e serviços que atendam às suas necessidades, desejos e capacidades. 
                  Essa teoria se baseia em entender profundamente quem são os usuários, o que eles precisam e como eles interagem com o 
                  produto ou serviço em questão.
            </Text>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <View style={{ borderWidth: .5, borderRadius: 5, borderColor: '#f55b5a', marginBottom: 20 }}>
                <Image
                  source={require('./assets/imagem-1.jpg')}
                  style={{
                    width: width - 40,
                    height: 150,
                    borderRadius: 5,
                  }}
                />
              </View>
              <Text style={{ fontFamily: 'Poppins', fontSize: 15, color: 'black', marginBottom: 20 }}>
                  1. Entendimento do Usuário: 
                  {'\n'}
                  O processo de design começa com uma compreensão profunda dos usuários, 
                  suas características, habilidades, objetivos e necessidades. Isso envolve a realização de pesquisas, 
                  entrevistas e observações para obter insights valiosos.

                  {'\n\n'}

                  2. Iteração e Feedback Constantes: 
                  {'\n'}
                  O design centrado no usuário é um processo iterativo, no qual os protótipos 
                  são testados e refinados continuamente com base no feedback dos usuários. Esse ciclo de feedback ajuda a garantir 
                  que o produto final atenda às expectativas e necessidades dos usuários.

                  {'\n\n'}

                  3. Design Participativo: 
                  {'\n'}
                  Os usuários são envolvidos ativamente no processo de design, dando feedback, 
                  contribuindo com ideias e colaborando com os designers para criar soluções que atendam às suas necessidades.

                  {'\n\n'}
                  4. Foco na Usabilidade: 
                  {'\n'}
                  A usabilidade é uma preocupação central no design centrado no usuário. 
                  Os produtos devem ser fáceis de usar, intuitivos e eficientes, permitindo que os usuários 
                  realizem suas tarefas de forma eficaz e sem frustração.

                  {'\n\n'}
                  5. Personalização e Flexibilidade: 
                  {'\n'}
                  Reconhecer que os usuários têm diferentes necessidades e preferências, e projetar produtos que 
                  possam ser adaptados e personalizados para atender a essas diferenças.

                  {'\n\n'}
                  6. Avaliação Contínua: 
                  {'\n'}
                  O processo de design centrado no usuário não termina com o lançamento do produto. 
                  É importante continuar avaliando e melhorando o produto com base no feedback dos usuários e 
                  nas mudanças no contexto de uso ao longo do tempo.

                  {'\n\n'}
                  Considerações finais
                  {'\n'}
                  Ao aplicar esses princípios de forma eficaz, os designers e profissionais de UX podem criar 
                  produtos e serviços que ofereçam experiências positivas e satisfatórias para os usuários, 
                  promovendo o engajamento, a fidelidade e o sucesso do produto.

              </Text>      
              
                <View style={{ borderWidth: .5, borderRadius: 5, borderColor: '#f55b5a', marginBottom: 20 }}>
                <Image
                  source={require('./assets/imagem-3.png')}
                  style={{
                    width: width - 40,
                    height: 150,
                    borderRadius: 5,
                  }}
                />
              </View>

                  <Text style={{ fontFamily: 'Poppins', fontSize: 15, color: 'black', marginBottom: 20 }}>
                  • Desenvovendo um ambiente user-friendly

                  {'\n'}{'\n'}
                  Um sistema user-friendly, ou amigável ao usuário, é aquele que foi projetado e desenvolvido com foco nas necessidades, 
                  habilidades e preferências dos usuários finais. Em termos simples, é um sistema que é fácil de usar, intuitivo e 
                  que proporciona uma experiência agradável ao usuário durante a interação.

                  {'\n\n'}

                  • Características de um sistema user-friendly incluem: 
                  {'\n'}{'\n'}

                  1. Interface Intuitiva: A interface do sistema é projetada de forma lógica e intuitiva, tornando fácil para os 
                  usuários encontrar o que precisam e realizar tarefas sem esforço.

                  {'\n\n'}

                  2. Facilidade de Navegação: Os menus, botões e elementos de navegação são claros e organizados de forma a 
                  facilitar a movimentação dentro do sistema.

                  {'\n\n'}

                  3. Feedback claro: O sistema fornece feedback claro e imediato ao usuário sobre suas ações, ajudando a 
                  confirmar que uma ação foi realizada com sucesso e fornecendo orientação sobre o que fazer em seguida.

                  {'\n\n'}

                  4. Clareza e Simplicidade: A complexidade é reduzida ao mínimo necessário, eliminando elementos desnecessários e 
                  mantendo uma aparência limpa e organizada.

                  {'\n\n'}

                  5. Ajuda e Suporte: O sistema oferece recursos de ajuda facilmente acessíveis, como tutoriais, guias ou suporte ao 
                  cliente, para auxiliar os usuários em caso de dúvidas ou problemas.

                  {'\n\n'}

                  6. Adaptabilidade: O sistema pode se adaptar às necessidades individuais dos usuários, oferecendo opções 
                  de personalização e configuração.

                  {'\n\n'}

                  7. Performance rápida: O sistema responde de forma rápida e eficiente às ações dos usuários, minimizando o 
                  tempo de espera e mantendo uma experiência fluida.

                  {'\n\n'}

                  Em suma, um sistema user-friendly é aquele que coloca a experiência do usuário em primeiro lugar, garantindo que 
                  os usuários possam interagir com o sistema de forma fácil, eficiente e agradável, independentemente de sua 
                  experiência ou habilidades técnicas.

              </Text>      

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <Image
                  source={require('./assets/ballon.jpg')}
                  style={{
                    width: 120,
                    height: 80,
                    borderRadius: 5,
                    borderColor: '#f55b5a',
                    borderWidth: 0.5,
                    marginRight: 5,
                  }}
                />
                <Image
                  source={require('./assets/leaves.webp')}
                  style={{
                    width: 120,
                    height: 80,
                    borderRadius: 5,
                    borderColor: '#f55b5a',
                    borderWidth: 0.5,
                    marginRight: 5,
                  }}
                />
                <Image
                  source={require('./assets/drawning.webp')}
                  style={{
                    width: 120,
                    height: 80,
                    borderRadius: 5,
                    borderColor: '#f55b5a',
                    borderWidth: 0.5,
                    marginRight: 5,
                  }}
                />
              </View>

              <Text style={{ fontFamily: 'Poppins', fontSize: 15, color: 'black', marginBottom: 20 }}>

              Além do design centrado no usuário e do princípio de user-friendly, há uma série de outras considerações 
              importantes a se levar em conta ao criar um sistema para uma empresa. 
              Considerar também:

              {'\n\n'}

              • Requisitos e Objetivos da Empresa {'\n'}
              • Segurança da Informação {'\n'}
              • Escalabilidade e Flexibilidade {'\n'}
              • Integração com Sistemas Existentes {'\n'}
              • Manutenção e Suporte  {'\n'}
              • Conformidade Regulatória  {'\n'}
              • Feedback e Melhoria Contínua {'\n'}

              {'\n'}

              Ao levar em conta esses aspectos além do design centrado no usuário e do princípio de user-friendly, 
              você pode garantir que o sistema atenda às necessidades da empresa de maneira eficaz e sustentável, promovendo o sucesso a longo prazo.
              {'\n'}{'\n'}
              Acompanhe este projeto pelo github:{'\n'}
              https://github.com/RenatoRussano/Mobile-2TDSPM.git

              </Text>  

              <TouchableOpacity style={{ backgroundColor: '#f55b5a', borderRadius: 5, padding: 10, alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ fontFamily: 'Poppins', fontSize: 24, color: 'white' }}>Quer saber mais?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('./assets/livia.png')}
                  style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 0.5, borderColor: '#f55b5a' }}
                />
                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>Livia Freitas</Text>
                <Text>RM099892</Text>
              </View>

              <View style={{ alignItems: 'center' }}>
                <Image
                  source={require('./assets/renato.png')}
                  style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 0.5, borderColor: '#f55b5a' }}
                />
                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>Renato Romeu</Text>
                <Text>RM551325</Text>
              </View>

              <TouchableOpacity
                onPress={() => Linking.openURL('https://github.com/RenatoRussano/Mobile-2TDSPM.git')}
                style={{ alignItems: 'center' }}
              >
                <Image
                  source={require('./assets/github.png')}
                  style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 0.5, borderColor: '#f55b5a' }}
                />
                <Text style={{ marginTop: 5, fontWeight: 'bold' }}>GitHub</Text>
              </TouchableOpacity>
            </View>      

          </View>
          <View style={{ backgroundColor: '#f55b5a', alignItems: 'center', justifyContent: 'center', paddingVertical: 10, flexDirection: 'row', marginTop: 20 }}>
            <Text style={{ fontFamily: 'Poppins', fontSize: 16, color: 'white', marginRight: 10 }}>🦄 The Unicorn Cake Company</Text>
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

export default App;
