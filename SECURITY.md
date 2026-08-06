# Security Policy

## Reporting Security Vulnerabilities

We take the security of the Movec Landing Page seriously. If you discover a security vulnerability, please follow these guidelines:

### How to Report

**DO NOT** create a public GitHub issue for security vulnerabilities.

Instead, please report security issues privately to:
- **Email**: info@movec.co.ke
- **Subject**: [SECURITY] Brief description of the issue

### What to Include

Please include the following information:
1. **Type of vulnerability** (XSS, CSRF, SQL injection, etc.)
2. **Location** (file path, URL, component name)
3. **Steps to reproduce** the vulnerability
4. **Potential impact** of the vulnerability
5. **Suggested fix** (if you have one)
6. **Your contact information** for follow-up

### Response Timeline

- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Fix Timeline**: Depends on severity

---

## Security Best Practices

### For Developers

#### 1. Environment Variables
- **NEVER** commit `.env` files
- Use `.env.example` as a template
- Keep sensitive data in environment variables only
- Verify `.env` is in `.gitignore`

#### 2. API Keys & Secrets
- Store all API keys in environment variables
- Rotate keys regularly
- Use different keys for dev/staging/production
- Never log sensitive information

#### 3. Dependencies
- Keep dependencies up to date
- Run `npm audit` regularly
- Review security advisories
- Update vulnerable packages promptly

#### 4. Code Review
- All code must be reviewed before merge
- Check for security vulnerabilities
- Validate user inputs
- Sanitize data before display

#### 5. Authentication & Authorization
- Never store passwords in plain text
- Use secure authentication methods
- Implement proper access controls
- Validate permissions on backend

---

## Environment Variables

### Required Environment Variables:
```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Google Analytics ID
```

### Firebase Configuration:
Firebase credentials are stored in `src/config/Firebase.ts` and should be:
- Restricted by domain in Firebase console
- Protected with security rules
- Limited to required permissions only

---

## Known Security Considerations

### Firebase Security
- Firestore security rules must be properly configured
- API keys are restricted to specific domains
- Read/write access is controlled server-side

### Form Submissions
- Formspree handles form submissions securely
- No sensitive data stored client-side
- HTTPS enforced for all communications

### Third-Party Services
- Google Analytics: Privacy policy compliant
- Formspree: GDPR compliant
- All external scripts loaded over HTTPS

---

## Security Checklist

### Before Deploying:
- [ ] No `.env` files committed
- [ ] All API keys are environment variables
- [ ] Dependencies are up to date (`npm audit`)
- [ ] HTTPS is enforced
- [ ] Security headers configured
- [ ] Firebase security rules reviewed
- [ ] Form validation implemented
- [ ] XSS protection in place
- [ ] CSRF protection considered
- [ ] Error messages don't leak sensitive info

### Regular Maintenance:
- [ ] Run `npm audit` monthly
- [ ] Update dependencies quarterly
- [ ] Review access logs monthly
- [ ] Rotate API keys annually
- [ ] Review security policies quarterly

---

## Security Headers

The following security headers are configured in `render.yaml`:

```yaml
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## Data Protection

### User Data:
- Contact form submissions: Stored in Formspree (GDPR compliant)
- Reviews: Stored in Firebase Firestore
- Analytics: Anonymized via Google Analytics
- No passwords or sensitive data collected

### Privacy:
- Privacy Policy: `/privacy-policy`
- Terms of Service: `/terms-of-service`
- Cookie consent: Handled by analytics
- Data retention: Defined in privacy policy

---

## Common Vulnerabilities to Avoid

### Cross-Site Scripting (XSS)
- ✅ React escapes output by default
- ✅ Avoid `dangerouslySetInnerHTML`
- ✅ Validate and sanitize user input
- ✅ Use Content Security Policy headers

### SQL Injection
- ✅ Using Firebase (NoSQL)
- ✅ No direct database queries from frontend
- ✅ Firebase security rules in place

### Cross-Site Request Forgery (CSRF)
- ✅ Formspree handles CSRF protection
- ✅ Same-origin policy enforced
- ✅ HTTPS only

### Dependency Vulnerabilities
- ⚠️ Run `npm audit` regularly
- ⚠️ Update vulnerable packages
- ⚠️ Review security advisories

---

## Security Audit Log

| Date | Issue | Severity | Status | Resolution |
|------|-------|----------|--------|------------|
| - | - | - | - | - |

---

## Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [React Security Best Practices](https://react.dev/learn/security)
- [NPM Security Advisories](https://www.npmjs.com/advisories)
- [Firebase Security Rules](https://firebase.google.com/docs/rules)

---

## Security Contact

For security-related inquiries:
- **Email**: info@movec.co.ke
- **Response Time**: 48 hours
- **Escalation**: Contact Figbloom Digital Group

---

## Disclosure Policy

- We follow **responsible disclosure**
- Security researchers will be credited (with permission)
- We commit to addressing vulnerabilities promptly
- We appreciate the security community's efforts

---

**Last Updated**: August 5, 2026

**Thank you for helping keep Movec secure!**
