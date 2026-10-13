/**
 * Ziyang Wang Portfolio — i18n, animations, interactions
 */

/** Private contact endpoints — not rendered as visible text on the page */
const contactConfig = {
  whatsapp: '6582565188',
  linkedin: 'https://www.linkedin.com/in/wesley-wang-747b20372/',
  mailSubject: 'Professional Inquiry — Ziyang Wang Portfolio',
  whatsappMessage: {
    en: 'Hello, I came across your portfolio and would like to connect regarding a professional opportunity.',
    zh: '您好，我在您的个人主页了解到您的背景，希望就职业相关事宜与您联系。'
  }
};

/** Build recipient at runtime to avoid plain-text email in static markup */
function getContactEmail() {
  const local = ['ziyang', 'w002'].join('');
  const domain = ['gmail', 'com'].join('.');
  return `${local}@${domain}`;
}

function buildMailtoUrl() {
  const params = new URLSearchParams({
    subject: contactConfig.mailSubject
  });
  return `mailto:${getContactEmail()}?${params.toString()}`;
}

function buildGmailUrl() {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: getContactEmail(),
    su: contactConfig.mailSubject
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

const translations = {
  en: {
    'exp.jpl.title': "AI Financial Analyst",
    'exp.jpl.company': "JPL Consultants",
    'exp.jpl.date': "Sep 2026 – Present",
    'exp.jpl.l1': "Current role combining financial analysis, data, and applied AI",
    'exp.jpl.l2': "Develop and evaluate AI-assisted workflows for reporting and document organisation",
    'exp.jpl.l3': "Check outputs against source information, with attention to data quality and human review",
    'exp.itr.title': "Cost Analyst",
    'exp.itr.company': "Intretech Malaysia",
    'exp.itr.date': "May – Sep 2026",
    'exp.itr.l1': "Worked on manufacturing cost and inventory analysis, connecting finance data with operations",
    'exp.itr.l2': "Supported accounts receivable, customer invoicing, and payment monitoring",
    'exp.itr.l3': "Used ERP data for reconciliation, financial records, and operational reporting",
    'exp.itr.l4': "Developed Excel-based reporting and reconciliation workflows with an interest in AI-assisted automation",
    'exp.itr.l5': "Contributed to SOP-based process improvement and coordinated with internal departments",
    'exp.boc.title': "Banking Training Programme Participant",
    'exp.boc.company': "Bank of China",
    'exp.boc.date': "Jan – Mar 2023",
    'exp.boc.l1': "Participated in a banking training programme in China",
    'exp.boc.l2': "Gained exposure to credit risk concepts",
    'proj.ai.badge': "Personal Prototype",
    'proj.ai.name': "WesQuant AI — Financial Intelligence Dashboard",
    'proj.ai.desc': "A personal prototype exploring global market dashboards and AI-assisted financial interfaces, with market views, data visualisations, and an AI chat interface.",
    'proj.ai.l1': "Responsive views for market indicators, sector performance, and portfolio visualisation",
    'proj.ai.l2': "Backend API routes for market data and AI chat, including demo-data fallback",
    'proj.ai.cta': "View public source",
    'proj.cost.badge': "Demo Project",
    'proj.cost.name': "Manufacturing Cost Intelligence",
    'proj.cost.desc': "A manufacturing finance demo connecting ERP transaction data with cost, inventory, scrap, and operational analysis.",
    'proj.cost.l1': "Structured data cleaning and reconciliation for finance and operations",
    'proj.cost.l2': "Dashboard-style analysis to make cost and inventory information easier to review",
    'proj.cost.l3': "SOP-based workflows for consistent, repeatable finance processes",
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.leadership': 'Leadership',
    'nav.projects': "Projects",
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',

    'hero.badge': "Finance · Applied AI · Data",
    'hero.greeting': "I'm",
    'hero.role': "AI Financial Analyst",
    'hero.desc': "AI Financial Analyst at JPL Consultants, with a Master of Finance and experience in manufacturing cost analysis, ERP data, finance operations, and AI-assisted workflows.",
    'hero.tag1': "JPL Consultants",
    'hero.tag2': "Manufacturing Finance",
    'hero.tag3': "ERP & Cost Analysis",
    'hero.tag4': "Applied AI",
    'hero.cta1': "View projects",
    'hero.cta2': 'Connect',
    'hero.metaLabel': "Current role",
    'hero.metaValue': "JPL Consultants",
    'hero.scroll': 'Scroll to explore',

    'about.label': 'About',
    'about.title': "Connecting finance, data, and applied AI",
    'about.lead': "I currently work as an AI Financial Analyst at JPL Consultants. My background brings together manufacturing finance, securities experience, and practical work with data and AI-assisted workflows.",
    'about.p1': "At Intretech Malaysia, my work covered cost and inventory analysis, accounts receivable, ERP data, reconciliation, and operational reporting. I focus on making financial information clear, traceable, and useful.",
    'about.p2': "Alongside my finance training, I explore reporting automation, SOP improvement, and financial dashboards. My project work includes manufacturing cost intelligence and WesQuant AI, supported by research on Asian banking efficiency.",
    'about.stat1': 'Countries of study',
    'about.stat2': 'GPA across degrees',
    'about.stat3': 'Event participants led',
    'about.stat4': 'Securities internships',

    'edu.label': 'Education',
    'edu.title': 'Academic foundation across borders',
    'edu.m1.badge': "Graduated",
    'edu.m1.degree': 'Master of Finance',
    'edu.m1.school': 'Universiti Putra Malaysia · Kuala Lumpur',
    'edu.m1.desc': 'Advanced coursework in derivatives, Islamic finance, financial modeling, portfolio analysis, risk management, and econometrics.',
    'edu.b1.degree': 'B.S. Organizational Leadership',
    'edu.b1.major': 'Major: International Finance',
    'edu.b1.school': 'Fort Hays State University · Kansas, USA',
    'edu.b1.desc': 'Foundation in accounting, monetary economics, micro & macroeconomics, international trade, and leadership.',

    'exp.label': 'Experience',
    'exp.title': "Finance operations to applied AI",
    'exp.e1.title': "Assistant to Financial Advisor Intern",
    'exp.e1.company': 'Dongxing Securities Co., Ltd.',
    'exp.e1.l1': "Supported portfolio monitoring and performance tracking",
    'exp.e1.l2': "Prepared client performance summaries and basic financial analysis reports",
    'exp.e1.l3': "Analysed product return data and risk indicators for advisory discussions",
    'exp.e1.l4': "Gained exposure to wealth management products and financial decision-making",
    'exp.e1.l5': "Checked the accuracy and consistency of client and transaction documentation",
    'exp.e2.title': 'Learning Attachment Programme',
    'exp.e2.company': 'China Galaxy Securities',
    'exp.e2.l1': "Assisted in equity and industry data collection and organisation",
    'exp.e2.l2': "Supported internal reports and presentation materials",
    'exp.e2.l3': "Built a foundation in financial markets and reporting workflows",
    'exp.e2.l4': 'Supported operational file management and documentation control',
    'exp.e2.l5': 'Developed discipline in regulated financial process environments',

    'lead.label': 'Leadership',
    'lead.title': 'Leading across cultures',
    'lead.role': 'Vice President, Student Union',
    'lead.desc': 'Led a team of 20+ student leaders to deliver large-scale events — cultural exchange forums, competitions, and career networking — reaching 500+ participants across campus communities.',
    'lead.h1': 'Managed event budgets, logistics, and resource allocation',
    'lead.h2': 'Bridged Chinese and international student communities',
    'lead.h3': 'Built negotiation, organization, and client-facing skills',
    'lead.m1': 'Team leaders',
    'lead.m2': 'Participants',
    'lead.m3': 'Years of impact',

    'skills.label': 'Skills',
    'skills.title': 'Tools & capabilities',
    'skills.g1.title': "Cost & Finance Operations",
    'skills.g1.desc': "Manufacturing cost and inventory analysis, accounts receivable, reconciliation, and operational reporting",
    'skills.g2.title': "ERP & Data Analysis",
    'skills.g2.desc': "ERP data cleaning, Excel modelling, data verification, and Python for analysis",
    'skills.g3.title': "AI & Process Improvement",
    'skills.g3.desc': "AI-assisted workflows, reporting automation, SOP design, and financial dashboards",
    'skills.g4.title': 'Languages',
    'skills.g4.desc': 'Native Mandarin · Professional English',

    'proj.label': "Projects & Research",
    'proj.title': "Applied AI and quantitative finance",
    'proj.badge': 'Featured Research',
    'proj.name': 'The Effect of Innovation Determinants on Banking Efficiency in Asia',
    'proj.desc': 'Built and managed a multi-country financial dataset covering Asian banks from 2018–2024. Performed quantitative analysis and financial data verification for performance and efficiency assessments.',
    'proj.l1': 'Prepared structured datasets, summary tables, and analytical outputs',
    'proj.l2': 'Applied Excel and Python for data organization and reporting',
    'proj.l3': 'Delivered findings for academic review and policy insight',

    'cert.label': 'Recognition',
    'cert.title': 'Awards & achievements',
    'cert.c1.title': 'Outstanding Student Leader',
    'cert.c1.desc': 'Exceptional leadership coordinating large-scale campus events as Student Union VP',
    'cert.c2.title': 'Outstanding Accounting Participant',
    'cert.c2.desc': 'Top performance in financial accounting competitions',
    'cert.c3.title': 'Harvard China Thinks Big — 3rd Prize',
    'cert.c3.desc': 'North America Finals — business research on entrepreneurship & financial innovation under Harvard, Yale, and MIT faculty',

    'contact.label': 'Contact',
    'contact.title': "Let's connect",
    'contact.status': "Open to professional connections",
    'contact.desc': "Connect with me about financial analysis, manufacturing finance, ERP data, and AI-assisted business workflows.",
    'contact.btnPrimary': 'Contact Me',
    'contact.btnEmail': 'Email Me',
    'contact.btnLinkedin': 'LinkedIn',
    'contact.hintWhatsApp': 'Message on WhatsApp',
    'contact.hintEmail': 'Contact via Email',
    'contact.emailAria': 'Email Me',
    'contact.hintLinkedin': 'View professional profile',
    'contact.note': 'Professional inquiries only · Personal details are not displayed on this site',

    'footer.tagline': "Finance · Applied AI · Data"
  },
  zh: {
    'exp.jpl.title': "AI 财务分析师",
    'exp.jpl.company': "JPL Consultants",
    'exp.jpl.date': "2026.09 – 至今",
    'exp.jpl.l1': "现职结合财务分析、数据与 AI 应用",
    'exp.jpl.l2': "开发与评估用于报告和文件整理的 AI 辅助工作流",
    'exp.jpl.l3': "对照来源检查输出，关注数据质量与人工复核",
    'exp.itr.title': "成本分析师",
    'exp.itr.company': "Intretech Malaysia",
    'exp.itr.date': "2026.05 – 2026.09",
    'exp.itr.l1': "参与制造业成本与库存分析，连接财务数据与运营信息",
    'exp.itr.l2': "支持应收账款、客户开票与付款状态跟踪",
    'exp.itr.l3': "利用 ERP 数据进行账目核对、财务记录维护与运营报告",
    'exp.itr.l4': "构建基于 Excel 的报告与数据核对流程，探索 AI 辅助自动化",
    'exp.itr.l5': "参与 SOP 流程改进，并与内部部门协作",
    'exp.boc.title': "银行业培训项目学员",
    'exp.boc.company': "中国银行",
    'exp.boc.date': "2023.01 – 2023.03",
    'exp.boc.l1': "参加中国银行的银行业培训项目",
    'exp.boc.l2': "接触信用风险相关概念",
    'proj.ai.badge': "个人原型",
    'proj.ai.name': "WesQuant AI — 金融信息看板",
    'proj.ai.desc': "探索全球市场看板与 AI 辅助金融界面的个人原型，包含市场概览、数据可视化与 AI 聊天界面。",
    'proj.ai.l1': "为市场指标、行业表现与投资组合可视化设计响应式界面",
    'proj.ai.l2': "实现市场数据与 AI 聊天后端接口，并保留演示数据兜底",
    'proj.ai.cta': "查看公开源码",
    'proj.cost.badge': "演示项目",
    'proj.cost.name': "制造业成本分析演示平台",
    'proj.cost.desc': "将 ERP 交易数据与成本、库存、报废及运营分析连接的制造业财务演示项目。",
    'proj.cost.l1': "围绕财务与运营数据进行结构化清洗和核对",
    'proj.cost.l2': "通过看板分析，使成本与库存信息更易于查看和复核",
    'proj.cost.l3': "设计基于 SOP 的一致、可重复财务流程",
    'nav.about': '关于',
    'nav.education': '教育',
    'nav.experience': '经历',
    'nav.leadership': '领导力',
    'nav.projects': "项目",
    'nav.contact': '联系',
    'nav.cta': '联系我',

    'hero.badge': "金融 · AI 应用 · 数据",
    'hero.greeting': '我是',
    'hero.role': "AI 财务分析师",
    'hero.desc': "现任 JPL Consultants AI 财务分析师，拥有金融学硕士背景，具备制造业成本分析、ERP 数据、财务运营与 AI 辅助工作流经验。",
    'hero.tag1': "JPL Consultants",
    'hero.tag2': "制造业财务",
    'hero.tag3': "ERP 与成本分析",
    'hero.tag4': "AI 应用",
    'hero.cta1': "查看项目",
    'hero.cta2': '建立联系',
    'hero.metaLabel': "当前任职",
    'hero.metaValue': "JPL Consultants",
    'hero.scroll': '向下探索',

    'about.label': '关于我',
    'about.title': "连接财务、数据与 AI 应用",
    'about.lead': "我目前在 JPL Consultants 担任 AI 财务分析师，结合制造业财务、证券机构经历以及数据分析和 AI 辅助工作流实践。",
    'about.p1': "在 Intretech Malaysia，我的工作涵盖成本与库存分析、应收账款、ERP 数据、账目核对及运营报告，关注财务信息的清晰性、可追溯性与实际应用。",
    'about.p2': "在金融专业训练之外，我持续探索报告自动化、SOP 改进与财务看板。项目实践包括制造业成本分析演示平台和 WesQuant AI，同时具备亚洲银行效率的量化研究经验。",
    'about.stat1': '留学国家',
    'about.stat2': '学位平均绩点',
    'about.stat3': '活动参与人数',
    'about.stat4': '证券实习',

    'edu.label': '教育背景',
    'edu.title': '跨越国界的学术根基',
    'edu.m1.badge': "已毕业",
    'edu.m1.degree': '金融学硕士',
    'edu.m1.school': '马来西亚博特拉大学 · 吉隆坡',
    'edu.m1.desc': '核心课程涵盖衍生品、伊斯兰金融、金融建模、投资组合分析、风险管理与金融计量经济学。',
    'edu.b1.degree': '组织领导学学士',
    'edu.b1.major': '主修：国际金融',
    'edu.b1.school': '美国 Fort Hays State University · 堪萨斯',
    'edu.b1.desc': '基础课程包括会计原理、货币经济学、微观与宏观经济学、国际贸易及领导力培养。',
    'exp.label': '工作经历',
    'exp.title': "从财务运营到 AI 应用",
    'exp.e1.title': "理财顾问助理实习生",
    'exp.e1.company': '东兴证券股份有限公司',
    'exp.e1.l1': "支持投资组合监控与业绩跟踪",
    'exp.e1.l2': "协助编制客户业绩摘要与基础财务分析报告",
    'exp.e1.l3': "分析产品收益数据与风险指标，支持顾问讨论",
    'exp.e1.l4': "了解财富管理产品与财务决策流程",
    'exp.e1.l5': "核查客户与交易文件的数据准确性及一致性",
    'exp.e2.title': '学习见习项目',
    'exp.e2.company': '中国银河证券',
    'exp.e2.l1': "协助股票与行业数据采集及整理",
    'exp.e2.l2': "支持内部报告及演示材料编制",
    'exp.e2.l3': "建立金融市场与报告流程的基础认知",
    'exp.e2.l4': '支持运营档案管理与文件管控',
    'exp.e2.l5': '在监管环境中培养金融流程规范意识',

    'lead.label': '领导力',
    'lead.title': '跨文化引领',
    'lead.role': '学生会副主席',
    'lead.desc': '带领 20+ 名学生骨干，组织文化交流论坛、竞赛及职业社交等大型活动，服务 500+ 名校园参与者。',
    'lead.h1': '管理活动预算、后勤与资源配置',
    'lead.h2': '搭建中外学生沟通桥梁',
    'lead.h3': '培养谈判、组织及面向客户的综合能力',
    'lead.m1': '学生骨干',
    'lead.m2': '活动参与者',
    'lead.m3': '任职年限',

    'skills.label': '技能',
    'skills.title': '工具与能力',
    'skills.g1.title': "成本分析与财务运营",
    'skills.g1.desc': "制造业成本与库存分析、应收账款、账目核对及运营报告",
    'skills.g2.title': "ERP 与数据分析",
    'skills.g2.desc': "ERP 数据清洗、Excel 建模、数据核查与 Python 分析",
    'skills.g3.title': "AI 与流程改进",
    'skills.g3.desc': "AI 辅助工作流、报告自动化、SOP 设计与财务看板",
    'skills.g4.title': '语言',
    'skills.g4.desc': '母语中文 · 专业工作英语',

    'proj.label': "项目与研究",
    'proj.title': "AI 应用与量化金融实践",
    'proj.badge': '重点研究',
    'proj.name': '创新因素对亚洲银行效率的影响研究',
    'proj.desc': '构建并管理涵盖 2018–2024 年亚洲银行的多国金融数据集，开展定量分析与数据核查，评估银行绩效与效率。',
    'proj.l1': '编制结构化数据集、汇总表与分析成果',
    'proj.l2': '运用 Excel 与 Python 进行数据整理与报告生成',
    'proj.l3': '为学术评审与政策洞察提供研究结论',

    'cert.label': '荣誉奖项',
    'cert.title': '认证与成就',
    'cert.c1.title': '优秀学生干部',
    'cert.c1.desc': '以学生会副主席身份出色统筹大型校园活动',
    'cert.c2.title': '优秀会计竞赛参与者',
    'cert.c2.desc': '在财务会计竞赛中取得优异成绩',
    'cert.c3.title': '哈佛 China Thinks Big 北美决赛三等奖',
    'cert.c3.desc': '在哈佛、耶鲁、MIT 教授指导下完成创业与金融创新商业研究',

    'contact.label': '联系方式',
    'contact.title': '期待与您交流',
    'contact.status': "欢迎职业交流与联系",
    'contact.desc': "欢迎就财务分析、制造业财务、ERP 数据与 AI 辅助业务流程交流。",
    'contact.btnPrimary': '联系我',
    'contact.btnEmail': '发送邮件',
    'contact.btnLinkedin': 'LinkedIn',
    'contact.hintWhatsApp': '通过 WhatsApp 快速联系',
    'contact.hintEmail': '通过邮件联系',
    'contact.emailAria': '发送邮件',
    'contact.hintLinkedin': '查看职业档案',
    'contact.note': '仅限职业相关咨询 · 本站不展示个人敏感信息',

    'footer.tagline': "金融 · AI 应用 · 数据"
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.body.classList.add('lang-switching');
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = translations[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  document.querySelectorAll('.lang-en, .lang-zh').forEach((el) => {
    el.classList.remove('active');
  });
  document.querySelector(`.lang-${lang === 'zh' ? 'zh' : 'en'}`)?.classList.add('active');

  updateContactLinks();
  updateEmailAria();

  setTimeout(() => {
    document.body.classList.remove('lang-switching');
  }, 350);
}

function initLanguage() {
  const langSwitch = document.getElementById('langSwitch');
  langSwitch?.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
  });
  setLanguage(currentLang);
}

function initNav() {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav-links');

  const onScroll = () => {
    nav?.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    navToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
      navToggle?.classList.remove('active');
    });
  });
}

function initReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  reveals.forEach((el) => observer.observe(el));
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

function updateEmailAria() {
  const emailBtn = document.getElementById('contactEmail');
  const label = translations[currentLang]?.['contact.emailAria'];
  if (emailBtn && label) {
    emailBtn.setAttribute('aria-label', label);
  }
}

function updateContactLinks() {
  const lang = currentLang === 'zh' ? 'zh' : 'en';
  const waText = contactConfig.whatsappMessage[lang];
  const whatsapp = `https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(waText)}`;

  document.getElementById('contactWhatsApp')?.setAttribute('href', whatsapp);
  document.getElementById('contactLinkedin')?.setAttribute('href', contactConfig.linkedin);
}

function openEmailClient(e) {
  e.preventDefault();

  const mailto = buildMailtoUrl();
  const gmail = buildGmailUrl();
  let appOpened = false;

  const markOpened = () => {
    appOpened = true;
  };

  window.addEventListener('blur', markOpened, { once: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) markOpened();
  }, { once: true });

  window.location.href = mailto;

  setTimeout(() => {
    window.removeEventListener('blur', markOpened);
    if (!appOpened) {
      window.open(gmail, '_blank', 'noopener,noreferrer');
    }
  }, 900);
}

function initEmailButton() {
  const emailBtn = document.getElementById('contactEmail');
  emailBtn?.addEventListener('click', openEmailClient);
  emailBtn?.setAttribute('href', '#');
}

function initContactLinks() {
  updateContactLinks();
  initEmailButton();
  updateEmailAria();
}

function initParallax() {
  const orbs = document.querySelectorAll('.orb');
  let ticking = false;

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.03;
            orb.style.transform = `translateY(${y * speed}px)`;
          });
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  initLanguage();
  initNav();
  initReveal();
  initSmoothAnchors();
  initContactLinks();
  initParallax();
});
