# 💱 Conversor de Moedas

Um conversor de moedas simples e intuitivo que converte valores em Real Brasileiro (BRL) para Dólar Americano (USD) e Euro (EUR).

## 🚀 Funcionalidades

- **Conversão de BRL para USD e EUR**: Converte valores em reais para dólar e euro
- **Interface amigável**: Design limpo e responsivo
- **Formatação automática**: Valores exibidos com formatação de moeda apropriada
- **Taxas fixas**: Utiliza taxas de câmbio fixas para conversão
- **Validação de entrada**: Aceita apenas valores numéricos

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página
- **CSS3**: Estilização e layout responsivo
- **JavaScript (ES6+)**: Lógica de conversão e interatividade

## 📁 Estrutura do Projeto

```
conversor-de-moedas/
├── index.html          # Página principal
├── script.js           # Lógica de conversão
├── style.css           # Estilos da aplicação
└── README.md           # Documentação do projeto
```

## 🎯 Como Usar

1. **Abra o arquivo `index.html`** em seu navegador
2. **Digite o valor em reais** no campo de entrada
3. **Clique no botão "Converter"**
4. **Visualize os resultados** formatados em USD e EUR

## 💡 Exemplo de Uso

- **Entrada**: R$ 1.543,50
- **Saída USD**: $296.83
- **Saída EUR**: €275.63

## ⚙️ Configuração das Taxas

As taxas de câmbio podem ser ajustadas no arquivo `script.js`:

```javascript
const taxaDolar = 5.20  // Taxa USD/BRL
const taxaEuro = 5.60   // Taxa EUR/BRL
```

## 🎨 Características da Interface

- **Design responsivo**: Adapta-se a diferentes tamanhos de tela
- **Cores suaves**: Paleta de cores azul e verde para melhor experiência
- **Feedback visual**: Hover effects nos botões
- **Tipografia clara**: Fonte Arial para melhor legibilidade

## 📝 Notas Técnicas

- Utiliza `toFixed(2)` para arredondamento com 2 casas decimais
- Formatação de moeda com `toLocaleString()`
- Event listeners para interatividade
- Validação de entrada numérica

## 🔄 Melhorias Futuras

- [ ] Integração com API de câmbio em tempo real
- [ ] Histórico de conversões
- [ ] Mais moedas disponíveis
- [ ] Gráficos de variação de câmbio
- [ ] Modo escuro

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

**Desenvolvido com ❤️ para fins educacionais**
