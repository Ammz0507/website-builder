export const FormCanvas = ({ fields }) => (
  <div className="canvas">
    <h3>Form Canvas</h3>
    {fields.length === 0 ? (
      <div style={{
        color:'#a0aec0',
        fontStyle:'italic',
        marginTop:'2rem',
        fontSize:'18px'
      }}>
        Add fields from left panel to design your form!
      </div>
    ) : (
      fields.map((field, i) => (
        <div key={i} className="form-field">
          <label>{field.label}</label>
          <input type={field.type} placeholder={field.placeholder} />
        </div>
      ))
    )}
  </div>
);

