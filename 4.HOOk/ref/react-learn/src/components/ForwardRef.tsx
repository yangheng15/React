import React, { Ref } from 'react';

function ForwardRef(props: any, ref: Ref<HTMLInputElement>) {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    );
}

export default React.forwardRef(ForwardRef);
