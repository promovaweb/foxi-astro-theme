---
title: 'Segurança de Dados em SaaS: O Que Toda Empresa Deve Saber'
pubDate: 2024-09-18T09:00:00Z
description: 'Guia completo sobre segurança de dados em aplicações SaaS: criptografia, autenticação, conformidade com LGPD, boas práticas e como o Foxi protege suas informações.'
author: 'luizeof'
image: '/blog/post-06-cover.png'
tags: ['segurança', 'lgpd', 'dados', 'privacidade']
---

Em 2023, o Brasil registrou mais de **8,4 bilhões de tentativas de ataques cibernéticos** — o suficiente para atacar cada brasileiro 40 vezes. Para empresas que armazenam dados de clientes em plataformas SaaS, entender os fundamentos de segurança deixou de ser opcional.

Este guia explica os conceitos essenciais de segurança de dados, as obrigações legais pela LGPD e como o Foxi protege suas informações.

---

## Fundamentos de Segurança de Dados

### A Tríade CIA

Toda estratégia de segurança da informação é construída sobre três pilares:

| Pilar | Nome completo | Significado |
|-------|--------------|-------------|
| **C** | Confidencialidade | Apenas pessoas autorizadas acessam os dados |
| **I** | Integridade | Os dados não são alterados sem autorização |
| **A** | Disponibilidade | Os dados estão acessíveis quando necessários |

Cada controle de segurança serve para proteger um ou mais desses pilares.

---

## Autenticação e Controle de Acesso

### Autenticação Multifator (MFA)

O MFA adiciona uma segunda (ou terceira) camada de verificação além da senha. Os tipos mais comuns:

1. **Algo que você sabe** — Senha, PIN
2. **Algo que você tem** — Aplicativo autenticador (Google Authenticator, Authy), token físico
3. **Algo que você é** — Biometria (impressão digital, reconhecimento facial)

A combinação de pelo menos dois fatores torna o ataque até **99,9% menos provável**, segundo dados da Microsoft.

### Modelo de Menor Privilégio

Cada usuário deve ter acesso apenas ao que precisa para realizar seu trabalho. Não conceda:

- Acesso de administrador para quem só precisa visualizar
- Acesso a projetos de outras equipes sem necessidade
- Permissões permanentes para acessos que deveriam ser temporários

### Controle de Acesso Baseado em Papéis (RBAC)

O Foxi implementa RBAC com os seguintes níveis:

| Papel | Permissões | Exemplo de uso |
|-------|-----------|----------------|
| Visualizador | Leitura apenas | Stakeholders externos |
| Colaborador | Leitura + criação de tarefas | Membros da equipe |
| Editor | Leitura + edição + criação | Líderes de projeto |
| Administrador | Acesso total ao projeto | Product Owner |
| Proprietário | Acesso total à organização | CEO, CTO |

---

## Criptografia: Dados em Repouso e em Trânsito

### Dados em Trânsito

Toda comunicação entre seu navegador e o Foxi é protegida por **TLS 1.3** — o padrão mais recente e seguro de criptografia em trânsito.

Isso significa que:
- Senhas nunca trafegam em texto puro
- Sessões são criptografadas de ponta a ponta
- Certificados são renovados automaticamente

### Dados em Repouso

Os dados armazenados nos servidores do Foxi são criptografados com **AES-256** — o mesmo padrão usado pelo governo americano para informações classificadas.

### Chaves de Criptografia

As chaves são gerenciadas via **AWS KMS** (Key Management Service) com rotação automática a cada 90 dias. Nenhum funcionário do Foxi tem acesso às chaves de descriptografia dos dados dos clientes.

---

## LGPD: O Que Você Precisa Saber

### Princípios Fundamentais da LGPD

A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) estabelece que o tratamento de dados pessoais deve seguir estes princípios:

- **Finalidade** — Dados coletados para fins específicos e informados ao titular
- **Adequação** — Compatibilidade com as finalidades declaradas
- **Necessidade** — Limitação ao mínimo necessário para os fins declarados
- **Livre acesso** — Titular tem direito a consultar, corrigir e excluir seus dados
- **Qualidade** — Dados devem ser exatos, claros e atualizados
- **Transparência** — Informações claras sobre o tratamento realizado
- **Segurança** — Medidas técnicas e administrativas para proteção
- **Prevenção** — Adoção de medidas para prevenir danos
- **Não discriminação** — Proibição de uso para fins discriminatórios

### Direitos dos Titulares

Os usuários têm direito de:

1. Confirmar se seus dados são tratados
2. Acessar os dados armazenados
3. Corrigir dados incompletos ou incorretos
4. Solicitar a anonimização ou exclusão dos dados
5. Solicitar portabilidade dos dados
6. Revogar o consentimento a qualquer momento
7. Receber informações sobre compartilhamento com terceiros

---

## Boas Práticas para Empresas que Usam SaaS

### Antes de Contratar um SaaS

- [ ] Verifique se o fornecedor possui certificações de segurança (SOC 2, ISO 27001)
- [ ] Leia o DPA (Data Processing Agreement) antes de assinar
- [ ] Confirme onde os dados são armazenados (país e provedor de cloud)
- [ ] Verifique se existe SLA para incidentes de segurança
- [ ] Peça o relatório de pentest mais recente

### Após Contratar

- [ ] Ative MFA para todos os usuários sem exceção
- [ ] Configure SSO (Single Sign-On) se disponível
- [ ] Revise permissões de acesso trimestralmente
- [ ] Desative usuários inativos ou desligados imediatamente
- [ ] Configure alertas de login suspeito
- [ ] Treine a equipe sobre phishing e engenharia social

---

## Script de Auditoria de Acessos

Execute este script mensalmente para auditar quem tem acesso ao quê na sua organização Foxi:

```bash
#!/bin/bash
# auditoria-acessos-foxi.sh
# Gera relatório de acessos para conformidade com LGPD

TOKEN="${FOXI_API_TOKEN}"
ORG_ID="${FOXI_ORG_ID}"
DATA=$(date +"%Y-%m-%d")
RELATORIO="auditoria-acessos-${DATA}.csv"

echo "📋 Gerando relatório de auditoria de acessos — ${DATA}"
echo ""

# Cabeçalho do CSV
echo "Nome,Email,Papel,Projetos com Acesso,Último Acesso,MFA Ativo" > "$RELATORIO"

# Buscar todos os membros da organização
curl -s \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://api.foxi.com.br/v1/organizations/${ORG_ID}/members?limit=100" \
  | jq -r '.data[] | [.name, .email, .role, (.projects | length | tostring), .last_active_at, (.mfa_enabled | tostring)] | @csv' \
  >> "$RELATORIO"

TOTAL=$(tail -n +2 "$RELATORIO" | wc -l)
SEM_MFA=$(tail -n +2 "$RELATORIO" | grep -c ",false$")

echo "✅ Relatório gerado: ${RELATORIO}"
echo "👥 Total de usuários: ${TOTAL}"
echo "⚠️  Usuários sem MFA: ${SEM_MFA}"
echo ""

if [ "$SEM_MFA" -gt 0 ]; then
  echo "🚨 ATENÇÃO: ${SEM_MFA} usuário(s) sem autenticação multifator ativada!"
  echo "   Revise o relatório e solicite ativação do MFA imediatamente."
fi
```

### Exemplo de Política de Senhas (texto plano)

```text
POLÍTICA DE SENHAS — FOXI ENTERPRISE
Versão: 2.1 | Vigência: 01/01/2025
========================================

REQUISITOS MÍNIMOS:
- Comprimento: mínimo 12 caracteres
- Letras maiúsculas: mínimo 1
- Letras minúsculas: mínimo 1
- Números: mínimo 1
- Caracteres especiais: mínimo 1 (!@#$%^&*)

REGRAS DE USO:
- Troca obrigatória: a cada 90 dias
- Reutilização: não permitida nas últimas 10 senhas
- Bloqueio: após 5 tentativas incorretas (15 min)
- Compartilhamento: PROIBIDO sob qualquer circunstância

MFA OBRIGATÓRIO PARA:
- Todos os usuários com papel de Administrador
- Acesso a dados de clientes (papel Editor ou acima)
- Acesso via API com escopos de escrita

========================================
Aprovado por: Equipe de Segurança da Informação
```

## Incidentes de Segurança: O Que Fazer

### Plano de Resposta a Incidentes

Quando um incidente é detectado, siga este protocolo:

1. **Identificação** — Confirme que o incidente realmente ocorreu
2. **Contenção** — Limite o escopo do dano (bloquear acessos, isolar sistemas)
3. **Erradicação** — Remova a causa raiz do problema
4. **Recuperação** — Restaure sistemas e dados ao estado normal
5. **Notificação** — Informe a ANPD e os titulares afetados em até 72h (exigido pela LGPD)
6. **Lições aprendidas** — Documente e melhore os processos

---

> "Segurança não é um produto, é um processo." — Bruce Schneier

O Foxi é auditado anualmente por empresas de segurança independentes. Nosso relatório SOC 2 Tipo II está disponível sob NDA para clientes Enterprise. Entre em contato com o time de vendas para solicitar.
