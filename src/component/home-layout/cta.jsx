import Button from '../button'

const Cta = () => {
    return ( 
        <div className="cta">
            <div className="cta-box">
                <h3 className="cta-box-h3">
                    Are you ready to order with the best deals?
                </h3>
                <Button className = {'button-cta'}>
                    Proceed to order {'>'}
                </Button>
            </div>
        </div>
     );
}
 
export default Cta;