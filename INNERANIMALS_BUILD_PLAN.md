# 🚀 InnerAnimals.com - Fortune 500 Next.js Build Plan

## 🎯 **Project Overview**

**Domain:** `inneranimals.com`  
**Platform:** Next.js 14+ (App Router)  
**Deployment:** Vercel (auto-deploy)  
**Priority:** #2 (after meauxbility.org)  
**Quality:** Fortune 500 standard

---

## 📋 **Build Requirements**

### **1. Repository Setup**
- ✅ Single GitHub repository
- ✅ Auto-deploy on push to `main`
- ✅ Vercel integration
- ✅ GitHub Actions for CI/CD

### **2. Pages (10+ Pages)**
1. **Homepage** (`/`) - Hero, features, CTA
2. **About** (`/about`) - Company story, mission
3. **Services** (`/services`) - Service offerings
4. **Portfolio** (`/portfolio`) - Work showcase
5. **Blog** (`/blog`) - Blog listing
6. **Blog Post** (`/blog/[slug]`) - Individual posts
7. **Contact** (`/contact`) - Contact form
8. **Team** (`/team`) - Team members
9. **Careers** (`/careers`) - Job listings
10. **Case Studies** (`/case-studies`) - Detailed projects
11. **Privacy Policy** (`/privacy`) - Legal
12. **Terms** (`/terms`) - Legal

### **3. Fortune 500 Quality Features**
- ✅ Modern, professional design
- ✅ Mobile-first responsive
- ✅ Fast performance (Lighthouse 90+)
- ✅ SEO optimized
- ✅ Accessibility (WCAG AA)
- ✅ Smooth animations
- ✅ Professional typography
- ✅ High-quality imagery
- ✅ Contact forms working
- ✅ Analytics ready

### **4. Tech Stack**
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Resend
- **CMS:** Markdown (blog) or headless CMS ready
- **Deployment:** Vercel
- **CI/CD:** GitHub Actions

---

## 🏗️ **Project Structure**

```
inneranimals-com/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   ├── careers/
│   │   └── page.tsx
│   ├── case-studies/
│   │   └── page.tsx
│   ├── privacy/
│   │   └── page.tsx
│   └── terms/
│       └── page.tsx
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ContactForm.tsx
│   └── ...
├── lib/
│   ├── utils.ts
│   └── ...
├── public/
│   ├── images/
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy-vercel.yml
├── vercel.json
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 **Design System**

### **Colors**
- **Primary:** Professional blue (#1E40AF)
- **Secondary:** Accent orange (#F97316)
- **Neutral:** Gray scale
- **Success:** Green (#10B981)
- **Error:** Red (#EF4444)

### **Typography**
- **Headings:** Inter Bold
- **Body:** Inter Regular
- **Code:** JetBrains Mono

### **Spacing**
- Consistent 8px grid system
- Mobile-first padding
- Responsive breakpoints

---

## 🚀 **Deployment Setup**

### **1. Vercel Configuration**
- Auto-deploy from GitHub
- Environment variables
- Custom domain ready
- Preview deployments

### **2. GitHub Actions**
- Build verification
- Linting
- Type checking
- Auto-deploy to Vercel

### **3. Environment Variables**
- Resend API key (contact forms)
- Analytics keys (optional)
- CMS keys (if using headless CMS)

---

## 📦 **Pages Breakdown**

### **1. Homepage** (`/`)
- Hero section with CTA
- Features grid (3-4 features)
- Services preview
- Portfolio highlights
- Testimonials
- Final CTA

### **2. About** (`/about`)
- Company story
- Mission & values
- Timeline/milestones
- Team preview
- CTA to contact

### **3. Services** (`/services`)
- Service categories
- Detailed service cards
- Process overview
- Pricing (if applicable)
- CTA to contact

### **4. Portfolio** (`/portfolio`)
- Project grid
- Filter by category
- Project cards with images
- Links to case studies
- CTA to start project

### **5. Blog** (`/blog`)
- Blog post grid
- Category filters
- Search functionality
- Pagination
- Featured posts

### **6. Blog Post** (`/blog/[slug]`)
- Full post content
- Author info
- Related posts
- Social sharing
- Comments (optional)

### **7. Contact** (`/contact`)
- Contact form
- Office locations
- Social links
- Map (optional)
- Response time info

### **8. Team** (`/team`)
- Team member cards
- Roles & bios
- Social links
- CTA to careers

### **9. Careers** (`/careers`)
- Job listings
- Benefits overview
- Application process
- Culture section
- CTA to apply

### **10. Case Studies** (`/case-studies`)
- Detailed project pages
- Challenge/solution
- Results/metrics
- Testimonials
- CTA to start project

### **11. Privacy Policy** (`/privacy`)
- Legal content
- Data collection
- Cookie policy
- Contact info

### **12. Terms** (`/terms`)
- Terms of service
- Legal disclaimers
- Contact info

---

## ✅ **Build Checklist**

### **Phase 1: Setup** (30 min)
- [ ] Initialize Next.js project
- [ ] Install dependencies
- [ ] Configure Tailwind CSS
- [ ] Set up shadcn/ui
- [ ] Create folder structure
- [ ] Set up TypeScript

### **Phase 2: Components** (1 hour)
- [ ] Header component
- [ ] Footer component
- [ ] Hero component
- [ ] Contact form
- [ ] Button components
- [ ] Card components
- [ ] Navigation

### **Phase 3: Pages** (2 hours)
- [ ] Homepage
- [ ] About page
- [ ] Services page
- [ ] Portfolio page
- [ ] Blog listing
- [ ] Blog post template
- [ ] Contact page
- [ ] Team page
- [ ] Careers page
- [ ] Case studies
- [ ] Privacy/Terms

### **Phase 4: Styling** (1 hour)
- [ ] Apply design system
- [ ] Mobile responsiveness
- [ ] Animations
- [ ] Dark mode (optional)
- [ ] Polish & refine

### **Phase 5: Functionality** (1 hour)
- [ ] Contact form integration
- [ ] Blog markdown parsing
- [ ] Image optimization
- [ ] SEO metadata
- [ ] Analytics setup

### **Phase 6: Deployment** (30 min)
- [ ] GitHub repository
- [ ] Vercel project
- [ ] Environment variables
- [ ] GitHub Actions
- [ ] Domain connection ready

---

## 🎯 **Success Criteria**

✅ **10+ fully styled pages**  
✅ **Mobile-responsive design**  
✅ **Fast performance (90+ Lighthouse)**  
✅ **SEO optimized**  
✅ **Accessible (WCAG AA)**  
✅ **Auto-deploying**  
✅ **Production ready**  
✅ **Fortune 500 quality**

---

## 📊 **Timeline**

**Total Estimated Time:** 6-7 hours  
**Can be done in parallel with meauxbility.org deployment**

---

## 🚀 **Next Steps**

1. ✅ Create project structure
2. ✅ Set up Next.js + Tailwind
3. ✅ Build components
4. ✅ Create all pages
5. ✅ Style & polish
6. ✅ Set up deployment
7. ✅ Test & launch

**Ready to build!** 🎉

