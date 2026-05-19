import time
from functools import wraps
from typing import Union, Tuple

def _retry(*, max_retries: int = 3, delay: Union[int, float] = 1, exceptions: Tuple[Exception, ...] = (Exception,)):
    """装饰器重试"""

    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            retries = 0
            while True:
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    retries += 1
                    if retries >= max_retries:
                        raise e.__class__(f"操作在重试{max_retries}次后仍然失败: {e}")
                    time.sleep(delay)

        return wrapper

    return decorator