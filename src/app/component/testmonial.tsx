import { Star, Quote } from "lucide-react";

export default function Testimonial() {
  const testimonials = [
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris a orci facilisis rhoncus. Suspendisse suscipit neque orci, nec pulvinar lacus gravida at. In at ex eu nulla aliquam mattis quis et tortor. Ut sit amet ante urna. Praesent hendrerit mollis vestibulum. Phasellus condimentum quam id ullamcorper hendrerit. Aenean sit amet varius dolor, in molestie felis. Ut finibus varius erat vitae commodo. Nullam commodo purus convallis elementum mattis. Nulla a erat vitae urna consequat interdum et sit amet augue. Maecenas libero eros, tincidunt ac ultricies vehicula, laoreet sit amet tellus.",
      author: "Leah G.",
      location: "Ottawa",
      type: "patient",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris a orci facilisis rhoncus. Suspendisse suscipit neque orci, nec pulvinar lacus gravida at. In at ex eu nulla aliquam mattis quis et tortor. Ut sit amet ante urna. Praesent hendrerit mollis vestibulum. Phasellus condimentum quam id ullamcorper hendrerit. Aenean sit amet varius dolor, in molestie felis. Ut finibus varius erat vitae commodo. Nullam commodo purus convallis elementum mattis. Nulla a erat vitae urna consequat interdum et sit amet augue. Maecenas libero eros, tincidunt ac ultricies vehicula, laoreet sit amet tellus.",
      author: "Brian S.",
      location: "Mississauga",
      type: "patient",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris a orci facilisis rhoncus. Suspendisse suscipit neque orci, nec pulvinar lacus gravida at. In at ex eu nulla aliquam mattis quis et tortor. Ut sit amet ante urna. Praesent hendrerit mollis vestibulum. Phasellus condimentum quam id ullamcorper hendrerit. Aenean sit amet varius dolor, in molestie felis. Ut finibus varius erat vitae commodo. Nullam commodo purus convallis elementum mattis. Nulla a erat vitae urna consequat interdum et sit amet augue. Maecenas libero eros, tincidunt ac ultricies vehicula, laoreet sit amet tellus.",
      author: "Alan R.",
      role: "Pharmacist",
      location: "Hamilton",
      type: "pharmacist",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris a orci facilisis rhoncus. ",
      author: "Nisha M.",
      role: "Pharmacist",
      location: "Toronto",
      type: "pharmacist",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris a orci facilisis rhoncus. Suspendisse suscipit neque orci, nec pulvinar lacus gravida at. In at ex eu nulla aliquam mattis quis et tortor. Ut sit amet ante urna. Praesent hendrerit mollis vestibulum. Phasellus condimentum quam id ullamcorper hendrerit. Aenean sit amet varius dolor, in molestie felis. Ut finibus varius erat vitae commodo. Nullam commodo purus convallis elementum mattis. Nulla a erat vitae urna",
      author: "Charlene D.",
      location: "Scarborough",
      type: "patient",
    },
    {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris a orci facilisis rhoncus. Suspendisse suscipit neque orci, nec pulvinar lacus gravida at. In at ex eu nulla aliquam mattis quis et tortor. Ut sit amet ante urna. Praesent hendrerit mollis vestibulum. Phasellus condimentum quam id ullamcorper hendrerit. Aenean sit amet varius dolor, in molestie felis. Ut finibus varius erat vitae commodo. Nullam commodo ",
      author: "Marcus T.",
      role: "Pharmacist",
      location: "Windsor",
      type: "pharmacist",
    },
  ];

  const shuffledTestimonials = [...testimonials]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <section className="testimonial-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="testimonial-header">
          <div className="testimonial-icon">
            <Quote className="w-8 h-8 text-red-600" />
          </div>
          <h2>What Our Early Users Are Saying</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            See how Jz Pharmacy is improving the pharmacy experience for patients.
          </p>
        </div>

        <div className="testimonial-grid">
          {shuffledTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="testimonial-content">“{testimonial.content}”</p>
              <div className="border-t pt-4 mt-4">
                <p className="testimonial-author">
                  — {testimonial.author}
                  {testimonial.role && `, ${testimonial.role}`}
                </p>
                <p className="testimonial-location">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
