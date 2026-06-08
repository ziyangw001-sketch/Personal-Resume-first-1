/**
 * Ziyang Wang Portfolio — i18n, animations, interactions
 */

/** Private contact endpoints — not rendered as visible text on the page */
const contactConfig = {
  whatsapp: '60145851213',
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
    'nav.about': 'About',
    'nav.education': 'Education',
    'nav.experience': 'Experience',
    'nav.leadership': 'Leadership',
    'nav.projects': 'Research',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',

    'hero.badge': 'Finance · Global Markets · Data',
    'hero.greeting': "I'm",
    'hero.role': 'International Finance Professional',
    'hero.desc': 'Master of Finance graduate with cross-border education and hands-on experience in regulated securities environments — focused on markets, risk, and data-driven financial insight.',
    'hero.tag1': 'Finance Graduate',
    'hero.tag2': 'International Background',
    'hero.tag3': 'Securities Experience',
    'hero.tag4': 'Banking Research',
    'hero.cta1': 'View research',
    'hero.cta2': 'Connect',
    'hero.metaLabel': 'Based in',
    'hero.metaValue': 'Kuala Lumpur · Global',
    'hero.scroll': 'Scroll to explore',

    'about.label': 'About',
    'about.title': 'Building a global finance perspective',
    'about.lead': 'I combine rigorous finance training with real-world exposure in licensed securities firms — translating complex markets into clear, structured insight.',
    'about.p1': 'From derivatives and risk management to corporate finance and econometrics, my academic foundation spans both U.S. and Southeast Asian institutions. I thrive at the intersection of analytical rigor and operational discipline.',
    'about.p2': "Beyond the classroom, I've led cross-cultural student initiatives, competed at Harvard-affiliated innovation forums, and conducted quantitative research on Asian banking efficiency — always with an eye toward international financial institutions.",
    'about.stat1': 'Countries of study',
    'about.stat2': 'GPA across degrees',
    'about.stat3': 'Event participants led',
    'about.stat4': 'Securities internships',

    'edu.label': 'Education',
    'edu.title': 'Academic foundation across borders',
    'edu.m1.badge': 'Expected',
    'edu.m1.degree': 'Master of Finance',
    'edu.m1.school': 'Universiti Putra Malaysia · Kuala Lumpur',
    'edu.m1.desc': 'Advanced coursework in derivatives, Islamic finance, financial modeling, portfolio analysis, risk management, and econometrics.',
    'edu.b1.degree': 'B.S. Organizational Leadership',
    'edu.b1.major': 'Major: International Finance',
    'edu.b1.school': 'Fort Hays State University · Kansas, USA',
    'edu.b1.desc': 'Foundation in accounting, monetary economics, micro & macroeconomics, international trade, and leadership.',

    'exp.label': 'Experience',
    'exp.title': 'Inside regulated financial markets',
    'exp.e1.title': 'Assistant to Financial Advisor',
    'exp.e1.company': 'Dongxing Securities Co., Ltd.',
    'exp.e1.l1': 'Supported daily operations in a licensed financial institution',
    'exp.e1.l2': 'Processed financial documentation, data organization, and internal reporting',
    'exp.e1.l3': 'Verified client forms and supporting documents for completeness',
    'exp.e1.l4': 'Maintained Excel-based tracking files for record-keeping',
    'exp.e1.l5': 'Gained exposure to structured workflows and regulatory compliance',
    'exp.e2.title': 'Learning Attachment Programme',
    'exp.e2.company': 'China Galaxy Securities',
    'exp.e2.l1': 'Observed daily operations within a major securities firm',
    'exp.e2.l2': 'Exposure to documentation flows and internal reporting structures',
    'exp.e2.l3': 'Assisted in financial data collection and document organization',
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
    'skills.g1.title': 'Finance & Operations',
    'skills.g1.desc': 'Financial documentation, data organization, internal reporting in regulated environments',
    'skills.g2.title': 'Data & Analysis',
    'skills.g2.desc': 'Excel modeling, data verification, basic Python for analysis and forecasting',
    'skills.g3.title': 'Productivity',
    'skills.g3.desc': 'Microsoft Excel, Word, PowerPoint — structured workflows and presentation',
    'skills.g4.title': 'Languages',
    'skills.g4.desc': 'Native Mandarin · Professional English',

    'proj.label': 'Research',
    'proj.title': 'Quantitative insight on Asian banking',
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
    'contact.status': 'Open to professional opportunities',
    'contact.desc': 'For roles in international finance, capital markets, and data-driven financial functions.',
    'contact.btnPrimary': 'Contact Me',
    'contact.btnEmail': 'Email Me',
    'contact.btnLinkedin': 'LinkedIn',
    'contact.hintWhatsApp': 'Message on WhatsApp',
    'contact.hintEmail': 'Contact via Email',
    'contact.emailAria': 'Email Me',
    'contact.hintLinkedin': 'View professional profile',
    'contact.note': 'Professional inquiries only · Personal details are not displayed on this site',

    'footer.tagline': 'International Finance · Global Perspective'
  },
  zh: {
    'nav.about': '关于',
    'nav.education': '教育',
    'nav.experience': '经历',
    'nav.leadership': '领导力',
    'nav.projects': '研究',
    'nav.contact': '联系',
    'nav.cta': '联系我',

    'hero.badge': '金融 · 全球市场 · 数据',
    'hero.greeting': '我是',
    'hero.role': '国际金融专业人士',
    'hero.desc': '金融硕士，具备跨境教育背景及持牌证券机构实习经验，专注于金融市场、风险管理与数据驱动的金融洞察。',
    'hero.tag1': '金融硕士',
    'hero.tag2': '国际化背景',
    'hero.tag3': '证券实习经历',
    'hero.tag4': '银行效率研究',
    'hero.cta1': '查看研究',
    'hero.cta2': '建立联系',
    'hero.metaLabel': '所在地',
    'hero.metaValue': '吉隆坡 · 全球视野',
    'hero.scroll': '向下探索',

    'about.label': '关于我',
    'about.title': '构建全球化金融视野',
    'about.lead': '我将扎实的金融训练与持牌证券公司的实战经验相结合，将复杂的市场信息转化为清晰、结构化的洞察。',
    'about.p1': '从衍生品、风险管理到公司金融与计量经济学，我的学术基础横跨美国与东南亚顶尖院校，擅长在分析严谨性与运营规范之间找到平衡。',
    'about.p2': '课堂之外，我主导跨文化学生活动、参与哈佛系创新竞赛，并完成亚洲银行效率的量化研究——始终面向国际金融机构的职业方向。',
    'about.stat1': '留学国家',
    'about.stat2': '学位平均绩点',
    'about.stat3': '活动参与人数',
    'about.stat4': '证券实习',

    'edu.label': '教育背景',
    'edu.title': '跨越国界的学术根基',
    'edu.m1.badge': '预计毕业',
    'edu.m1.degree': '金融学硕士',
    'edu.m1.school': '马来西亚博特拉大学 · 吉隆坡',
    'edu.m1.desc': '核心课程涵盖衍生品、伊斯兰金融、金融建模、投资组合分析、风险管理与金融计量经济学。',
    'edu.b1.degree': '组织领导学学士',
    'edu.b1.major': '主修：国际金融',
    'edu.b1.school': '美国 Fort Hays State University · 堪萨斯',
    'edu.b1.desc': '基础课程包括会计原理、货币经济学、微观与宏观经济学、国际贸易及领导力培养。',
    'exp.label': '工作经历',
    'exp.title': '深入监管金融市场',
    'exp.e1.title': '理财顾问助理实习生',
    'exp.e1.company': '东兴证券股份有限公司',
    'exp.e1.l1': '支持持牌金融机构日常运营',
    'exp.e1.l2': '协助金融文件处理、数据整理及内部报告',
    'exp.e1.l3': '核查客户表格及支持文件的完整性',
    'exp.e1.l4': '维护基于 Excel 的跟踪档案',
    'exp.e1.l5': '了解结构化工作流程与合规要求',
    'exp.e2.title': '学习见习项目',
    'exp.e2.company': '中国银河证券',
    'exp.e2.l1': '观察大型证券公司日常运营',
    'exp.e2.l2': '了解文件流转与内部报告结构',
    'exp.e2.l3': '协助金融数据采集与文件整理',
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
    'skills.g1.title': '金融与运营',
    'skills.g1.desc': '监管环境下的金融文件处理、数据整理与内部报告',
    'skills.g2.title': '数据与分析',
    'skills.g2.desc': 'Excel 建模、数据核查、Python 基础分析与预测',
    'skills.g3.title': '办公工具',
    'skills.g3.desc': '精通 Microsoft Excel、Word、PowerPoint',
    'skills.g4.title': '语言',
    'skills.g4.desc': '母语中文 · 专业工作英语',

    'proj.label': '研究项目',
    'proj.title': '亚洲银行业量化洞察',
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
    'contact.status': '开放职业相关沟通',
    'contact.desc': '面向国际金融、资本市场及数据驱动金融相关机会。',
    'contact.btnPrimary': '联系我',
    'contact.btnEmail': '发送邮件',
    'contact.btnLinkedin': 'LinkedIn',
    'contact.hintWhatsApp': '通过 WhatsApp 快速联系',
    'contact.hintEmail': '通过邮件联系',
    'contact.emailAria': '发送邮件',
    'contact.hintLinkedin': '查看职业档案',
    'contact.note': '仅限职业相关咨询 · 本站不展示个人敏感信息',

    'footer.tagline': '国际金融 · 全球视野'
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
