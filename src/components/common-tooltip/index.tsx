import { Tooltip, type TooltipProps } from 'antd'

function CommonTooltip({ children, ...rest }: TooltipProps) {
  return (
     <Tooltip {...rest}>{children}</Tooltip>
  )
}

export default CommonTooltip