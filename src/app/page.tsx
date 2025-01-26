import HeroSection from '@/components/hero-section'
import UsedCompanies from '@/components/used-companies'
import BenefitSection from '@/components/benefit-section'
import FeatureSection from '@/components/feature-section'
import StatsSection from '@/components/stats-section'
import TestimonialsSection from '@/components/testimonials-section'
import FAQSection from '@/components/faq-section'
import ContactSection from '@/components/contact-section'
import PricingSection from '@/components/pricing-section'
import CTASection from '@/components/cta-section'

export default function Home() {
	return (
		<div className="mx-auto p-9 pb-20 gap-16 sm:p-20 mt-12">
			<HeroSection />
			<UsedCompanies />
			<BenefitSection />
			<FeatureSection />
			<StatsSection />
			<TestimonialsSection />
			<FAQSection />
			<ContactSection />
			<PricingSection />
			<CTASection />
		</div>
	)
}
