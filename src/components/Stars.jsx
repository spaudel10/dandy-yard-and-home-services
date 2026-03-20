export default function Stars({ count = 5 }) {
  return (
    <div className="dyhs-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="dyhs-star"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.76 1.64 7.03L12 17.3z" />
        </svg>
      ))}
    </div>
  )
}
