import Section from "../components/ui/Section";
export default function Services() {
  return (
    <Section
      title="Pharmacy Services"
      sub="Consultations, prescription refill reminders, and more."
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card">Pharmacist consultation</div>
        <div className="card">Prescription transfer</div>
        <div className="card">Immunization scheduling</div>
        <div className="card">Medication sync</div>
      </div>
    </Section>
  );
}
