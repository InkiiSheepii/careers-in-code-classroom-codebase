export default function List ({
    color,
  }) {
    return (
      <div style={{
        background: color,
        height: 100,
        width: 500,
      }}>
        {'My color is: ' + color}
      </div>
    );
  }