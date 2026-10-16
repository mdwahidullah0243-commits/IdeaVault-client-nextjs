import PrivateSecureCard from "./PrivateSecureCard";

const PrivateAndSecure = () => {
    return (
        <div className="w-10/12 mx-auto mt-30 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-semibold text-center">
                IdeaVault keeps your data private and secure
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <PrivateSecureCard
                    icon={'/cyber-security.png'}
                    title={'Security'}
                    description={'IdeaVault adopts a culture of security and holds confidentiality of customer information as its highest priority.'}
                />

                <PrivateSecureCard
                    icon={'/regulatory-compliance.png'}
                    title={'Compliance'}
                    description={'IdeaVault adheres to stringent standards and regulations and undergoes independent validation of compliance.'}
                />

                <PrivateSecureCard
                    icon={'/compliant.png'}
                    title={'Privacy'}
                    description={`IdeaVault's commitment to privacy extends to every facet of the organization to ensure customer data is managed with the utmost of care.`}
                />

                <PrivateSecureCard
                    icon={'/reliability.png'}
                    title={'Reliability'}
                    description={`IdeaVault® SaaS solutions are built on highly available, performant infrastructure to deliver our world class product line whenever it’s needed.`}
                />
            </div>
        </div>
    );
};

export default PrivateAndSecure;